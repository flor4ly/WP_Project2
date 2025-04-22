#  Frontend

## Overview
This is the frontend part of the WP_Project2 application, built with React. It provides a modern, responsive user interface for the project, featuring multiple pages and components organized in a feature-based structure.

## Features
- **Home Page**: Main landing page of the application
- **Projects Section**: Display and browse through projects
- **Services Section**: Information about services offered
- **About Page**: Information about the company/organization
- **Careers Page**: Job listings and career opportunities
- **Detailed Views**: Detailed pages for projects, services, and career information


## Project Structure
The project follows a feature-based organization:

```
frontend/
├── public/             # Static files
├── src/                # Source code
│   ├── data/           # Data models and services
│   ├── presentation/   # UI components organized by feature
│   │   ├── about/      # About page components
│   │   ├── careers/    # Careers page components
│   │   ├── careers_info/ # Career details components
│   │   ├── home/       # Home page components
│   │   ├── project_detail/ # Project detail components
│   │   ├── projects/   # Projects listing components
│   │   └── success_detail/ # Success stories components
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── ...             # Other configuration files
└── package.json        # Project dependencies and scripts
```

## Setup Instructions

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/flor4ly/WP_Project2.git
   cd WP_Project2/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

### Development Mode
To run the application in development mode:
```
npm start
```
This will start the development server and open the application in your default browser at [http://localhost:3000](http://localhost:3000).

### Building for Production
To build the application for production:
```
npm run build
```
This creates an optimized production build in the `build` folder.

### Running Tests
To run tests:
```
npm test
```

## Architecture
The application follows a clean architecture pattern with separation of concerns:

- **Data Layer**: Located in the `data/` directory, responsible for data models, services, and API interactions
- **Presentation Layer**: Located in the `presentation/` directory, contains UI components organized by feature

## Best Practices
- Components focus on a single responsibility
- Separation between data and presentation layers
- Consistent naming conventions throughout the codebase
- Feature-based organization for better maintainability

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request