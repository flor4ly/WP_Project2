import React, { useState, useEffect } from 'react';
import './styles/user_feedback.css';

const testimonials = [
  {
    name: "Jonathan Lee",
    position: "Co-Founder, ThreadLine Apparel",
    quote: "They brought our brand to life and built an online store that actually converts.",
    avatar: "https://placehold.co/200x200/1e3a5c/ffffff?text=JL"
  },
  {
    name: "Lina Müller",
    position: "Founder, GlowWell Skincare",
    quote: "The new branding and website perfectly capture who we are. Within weeks, we saw a boost in traffic and actual sales—not just clicks. It's been a game-changer for our growth.",
    avatar: "https://placehold.co/200x200/c96584/ffffff?text=LM",
    featured: true
  },
  {
    name: "Sara Thompson",
    position: "COO, Renta Estate",
    quote: "The app changed everything—better communication, smoother bookings.",
    avatar: "https://placehold.co/200x200/5e8b7e/ffffff?text=ST"
  },
  {
    name: "Daniel Rivera",
    position: "Product Lead, NovaEdTech",
    quote: "We had a decent product but a terrible online experience. Their team redesigned our entire platform with the user in mind. Since launch, engagement is way up, and users are finally staying on the site.",
    avatar: "https://placehold.co/200x200/a67b5b/ffffff?text=DR"
  },
  {
    name: "Claire Bennett",
    position: "Head of Operations, FitNest Co.",
    quote: "The upgraded system not only secured our platform but helped us meet international compliance standards ahead of schedule.",
    avatar: "https://placehold.co/200x200/deb881/ffffff?text=CB"
  },
  {
    name: "Mark Daniels",
    position: "CTO, Bolt Logistics",
    quote: "Our systems used to be a ticking time bomb. These guys came in, diagnosed everything, and secured our digital infrastructure faster than expected. We've never felt more confident in our tech stack.",
    avatar: "https://placehold.co/200x200/8b7e5e/ffffff?text=MD"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`testimonial-card ${isVisible ? 'visible' : ''} ${testimonial.featured ? 'featured' : ''}`}>
      <div className="avatar-container">
        <img src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <h3 className="client-name">{testimonial.name}</h3>
      <p className="client-position">{testimonial.position}</p>
      <div className="quote-divider"></div>
      <p className="client-quote">"{testimonial.quote}"</p>
    </div>
  );
};

export default function TestimonialsSection({ jobListings }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.querySelector('.testimonials-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`testimonials-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Client Reviews</h2>
          <p>What our clients say about our work</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="jobs-cta">
          <h3>Wanna be a part of something big?</h3>
          <p>Show your skills and join our team</p>

          <div className="job-positions">
            {jobListings?.length > 0 ? (
              jobListings.map((job) => (
                <span className="job-position" key={job.id}>
                  {job.title}
                </span>
              ))
            ) : (
              <span className="job-position">No openings currently</span>
            )}
          </div>

          <button className="btn outline-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}
