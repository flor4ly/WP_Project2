import React, { useState, useEffect, useCallback } from 'react';
import './home.css';
import ServicesSection from './widgets/service_section';
import CollaboratorsSection from './widgets/colloboraters';
import TestimonialsSection from './widgets/user_feedback';

const defaultImage = 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';
const API_BASE_URL = 'http://localhost:8080/api';

// Data controller for HomePage
const useHomePageController = () => {
  // State management
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [jobListings, setJobListings] = useState([]);
  const [featuredServices, setFeaturedServices] = useState([]);
  const [projectImages, setProjectImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [requestLog, setRequestLog] = useState([]);
  const [requestController, setRequestController] = useState(null);

  // Add to request log
  const logRequest = useCallback((message, data = null) => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = {
      timestamp,
      message,
      data: data ? JSON.stringify(data) : null
    };
    
    console.log(`[${timestamp}] ${message}`, data || '');
    setRequestLog(prev => [...prev, logEntry]);
  }, []);

  // Cancel any in-flight requests
  const cancelPendingRequests = useCallback(() => {
    if (requestController) {
      logRequest('🛑 Canceling previous request');
      requestController.abort();
    }
  }, [requestController, logRequest]);

  // Fetch data from API with improved error handling
  const fetchData = useCallback(async (retryCount = 0) => {
    // Cancel any pending requests
    cancelPendingRequests();
    
    // Create a new AbortController
    const controller = new AbortController();
    setRequestController(controller);
    
    try {
      setLoading(true);
      setError(null);
      
      // Log the start of the request
      logRequest('📡 Starting API request to /api/home');
      
      // Measure request time
      const startTime = performance.now();
      
      // Fetch data with timeout
      const timeoutId = setTimeout(() => {
        controller.abort();
        throw new Error('Request timed out after 10 seconds');
      }, 10000);
      
      // Fetch data from your backend API with AbortController signal
      const response = await fetch(`${API_BASE_URL}/home`, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
      
      // Clear timeout as request completed
      clearTimeout(timeoutId);
      
      // Log the response status
      logRequest(`🔄 API response status: ${response.status} ${response.statusText}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('API endpoint not found. Check that your backend server is running.');
        } else if (response.status >= 500) {
          throw new Error(`Server error: ${response.status}. Please try again later.`);
        } else {
          throw new Error(`API responded with status: ${response.status}`);
        }
      }
      
      // Handle potential JSON parsing errors
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error(`Failed to parse API response as JSON: ${jsonError.message}`);
      }
      
      const endTime = performance.now();
      
      // Validate data structure
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid data format received from API');
      }
      
      // Log the received data and timing
      logRequest(`✅ API request completed in ${(endTime - startTime).toFixed(0)}ms`, data);
      
      // Data validation for each section
      const projects = Array.isArray(data.featuredProjects) ? data.featuredProjects : [];
      const jobs = Array.isArray(data.jobListings) ? data.jobListings : [];
      const services = Array.isArray(data.featuredServices) ? data.featuredServices : [];
      
      // Log individual data sections
      logRequest('📊 Featured Projects received:', projects);
      logRequest('📊 Job Listings received:', jobs);
      logRequest('📊 Featured Services received:', services);
      
      // Set state with the validated API response data
      setFeaturedProjects(projects);
      setJobListings(jobs);
      setFeaturedServices(services);
      
      // Set better project images if thumbnails are not available
      const images = [
        'https://placehold.co/600x400/3498db/ffffff?text=Development',
        'https://placehold.co/600x400/9b59b6/ffffff?text=Security',
        'https://placehold.co/600x400/2ecc71/ffffff?text=DevOps',
        'https://placehold.co/600x400/e74c3c/ffffff?text=Analytics',
        'https://placehold.co/600x400/f39c12/ffffff?text=UI/UX',
        'https://placehold.co/600x400/1abc9c/ffffff?text=Cloud',
      ];
      
      setProjectImages(images);
      setLoading(false);
      setRequestController(null);
      
      logRequest('🎉 Page data loaded successfully and state updated');
    } catch (err) {
      // Don't handle if we're just aborting a request manually
      if (err.name === 'AbortError' && retryCount === 0) {
        logRequest('⏱️ Request was aborted');
        return;
      }
      
      logRequest(`❌ Error fetching data: ${err.message}`);
      console.error("Error fetching data:", err);
      
      // Handle CORS errors
      if (err.message.includes('CORS') || err.message.includes('cross-origin')) {
        setError("Cross-origin error detected. Make sure your API server has CORS enabled.");
      } 
      // Handle network errors
      else if (err.message.includes('NetworkError') || err.message.includes('Failed to fetch')) {
        setError("Network error. Please check your connection and make sure the backend server is running.");
        
        // Auto-retry for network errors, up to 2 retries
        if (retryCount < 2) {
          logRequest(`🔄 Auto-retrying (${retryCount + 1}/2) in 3 seconds...`);
          setTimeout(() => fetchData(retryCount + 1), 3000);
          return;
        }
      } else {
        setError(`Failed to load data: ${err.message}`);
      }
      
      setLoading(false);
      setRequestController(null);
    }
  }, [logRequest, cancelPendingRequests]);

  // Initialize visibility effect and fetch data
  useEffect(() => {
    // Set initial visibility with slight delay for animation
    setTimeout(() => setIsVisible(true), 100);
    
    logRequest('🚀 Component mounted, initiating data fetch');
    
    // Fetch data from API
    fetchData();
    
    // Cleanup function
    return () => {
      logRequest('🧹 Component unmounted, cleaning up');
      cancelPendingRequests();
    };
  }, [fetchData, logRequest, cancelPendingRequests]);

  // Additional functions for data handling
  const getProjectsWithImages = useCallback(() => {
    logRequest('🖼️ Mapping projects with images');
    return featuredProjects.map((project, index) => {
      // Validate project object
      if (!project || typeof project !== 'object') {
        return {
          id: `generated-${index}`,
          title: "Project Information Unavailable",
          description: "Project data could not be displayed",
          image: projectImages[index % projectImages.length]
        };
      }
      
      // Use project thumbnail if available, otherwise use fallback image
      const image = project.thumbnail && 
                    typeof project.thumbnail === 'string' && 
                    project.thumbnail !== "https://example.com/thumb.jpg" 
        ? project.thumbnail 
        : projectImages[index % projectImages.length];
        
      return { 
        ...project, 
        title: project.title || `Project ${index + 1}`,
        description: project.description || "No description available",
        image 
      };
    });
  }, [featuredProjects, projectImages, logRequest]);

  // Retry function for error state
  const retryFetch = useCallback(() => {
    logRequest('🔄 Retry fetch initiated by user');
    setError(null);
    fetchData(0);
  }, [fetchData, logRequest]);

  return {
    featuredProjects,
    jobListings,
    featuredServices,
    projectImages,
    loading,
    error,
    isVisible,
    getProjectsWithImages,
    retryFetch,
    requestLog
  };
};

// Main HomePage component using the controller
const HomePage = () => {
  const {
    featuredProjects,
    featuredServices,
    loading,
    error,
    isVisible,
    getProjectsWithImages,
    retryFetch,
    requestLog
  } = useHomePageController();

  // Debug panel visibility state
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  
  // Toggle debug panel
  const toggleDebugPanel = () => {
    setShowDebugPanel(prev => !prev);
  };

  // Handle error state
  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button className="btn primary-btn" onClick={retryFetch}>
          Try Again
        </button>
        
        {/* Debug button */}
        <button 
          className="btn secondary-btn"
          style={{ marginTop: '20px' }}
          onClick={toggleDebugPanel}
        >
          {showDebugPanel ? 'Hide' : 'Show'} Debug Info
        </button>
        
        {/* Debug panel */}
        {showDebugPanel && (
          <div className="debug-panel">
            <h3>Request Log:</h3>
            <div className="request-log">
              {requestLog.map((log, index) => (
                <div key={index} className="log-entry">
                  <span className="log-time">{log.timestamp}</span>
                  <span className="log-message">{log.message}</span>
                  {log.data && (
                    <pre className="log-data">{log.data}</pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Get projects with images - safely handle empty arrays
  const projectsWithImages = featuredProjects.length > 0 ? getProjectsWithImages() : [];

  return (
    <div className={`homepage ${isVisible ? 'visible' : ''}`}>
      {/* Debug toggle button */}
      <div className="debug-toggle" onClick={toggleDebugPanel}>
        {showDebugPanel ? '❌ Hide Debug' : '🐞 Debug'}
      </div>
      
      {/* Debug panel */}
      {showDebugPanel && (
        <div className="debug-panel">
          <h3>Request Log:</h3>
          <div className="request-log">
            {requestLog.map((log, index) => (
              <div key={index} className="log-entry">
                <span className="log-time">{log.timestamp}</span>
                <span className="log-message">{log.message}</span>
                {log.data && (
                  <pre 
                    className="log-data" 
                    onClick={(e) => {
                      if (log.data.length > 200) {
                        e.target.innerHTML = e.target.innerHTML.includes('...') 
                          ? log.data 
                          : `${log.data.substring(0, 200)}... (click to expand)`;
                      }
                    }}
                  >
                    {log.data.length > 200 ? 
                      `${log.data.substring(0, 200)}... (click to expand)` : 
                      log.data
                    }
                  </pre>
                )}
              </div>
            ))}
          </div>
          <h3>Current State:</h3>
          <div className="state-summary">
            <p>Featured Projects: {featuredProjects.length}</p>
            <p>Featured Services: {featuredServices.length}</p>
            <p>Loading: {loading ? 'Yes' : 'No'}</p>
            <p>Error: {error ? 'Yes' : 'No'}</p>
            <button 
              className="btn primary-btn small" 
              onClick={() => console.log({featuredProjects, featuredServices})}>
              Log State to Console
            </button>
          </div>
        </div>
      )}

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Smart Link to Seamless Tech Solutions</h1>
              <div className="hero-divider"></div>
              <p className="hero-lead">
                At Softlynk, we simplify the complex. Whether you're looking for on-demand IT support,
                software solutions, or system optimization — we've got you covered.
              </p>
              <p>
                Our platform connects individuals and businesses with expert tech services that are
                reliable, fast, and tailored to your needs.
              </p>
              <p className="tagline">Efficient. Scalable. Secure.</p>
              <div className="button-group">
                <button className="btn primary-btn">Get Started</button>
                <button className="btn secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-img">
              <div className="image-container">
                <img src={defaultImage} alt="Tech Solutions" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pass the services data to the ServicesSection component with safety check */}
      <ServicesSection services={featuredServices || []} />

      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>{featuredProjects.length} Amazing Projects</p>
          </div>
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading amazing projects...</p>
              {requestLog.length > 0 && (
                <p className="loading-status">
                  {requestLog[requestLog.length - 1].message}
                </p>
              )}
            </div>
          ) : projectsWithImages.length > 0 ? (
            <div className="project-grid">
              {projectsWithImages.map((project, index) => (
                <div
                  className="project-card"
                  key={project.id || index}
                  style={{ "--card-index": index, opacity: 1 }}
                >
                  <div className="card-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/600x400/ff6b6b/ffffff?text=Image+Error";
                      }} 
                    />
                  </div>
                  <div className="card-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="view-project-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>No projects available at this time.</p>
            </div>
          )}
          <div className="projects-cta">
            <button className="btn outline-btn">See All Projects</button>
          </div>
        </div>
      </section>

      <CollaboratorsSection />
      <TestimonialsSection />
      
      {/* Add some basic styles for the debug panel */}
      <style jsx>{`
        .debug-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #333;
          color: white;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        .debug-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          color: #0f0;
          padding: 20px;
          overflow-y: auto;
          z-index: 999;
          box-shadow: -5px 0 15px rgba(0,0,0,0.3);
          font-family: monospace;
          font-size: 12px;
        }
        
        .log-entry {
          margin-bottom: 10px;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }
        
        .log-time {
          color: #ff9800;
          margin-right: 10px;
        }
        
        .log-message {
          display: block;
          margin-bottom: 5px;
        }
        
        .log-data {
          background: #1a1a1a;
          padding: 8px;
          border-radius: 4px;
          overflow-x: auto;
          max-height: 150px;
          cursor: pointer;
        }
        
        .state-summary {
          background: #1a1a1a;
          padding: 10px;
          border-radius: 4px;
        }
        
        .btn.small {
          padding: 5px 10px;
          font-size: 12px;
          margin-top: 10px;
        }
        
        .error-container {
          text-align: center;
          padding: 40px 20px;
          max-width: 800px;
          margin: 40px auto;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .no-projects {
          text-align: center;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;