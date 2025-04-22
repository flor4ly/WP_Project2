# Softylink - README

This is a full-stack website built with **Spring Boot** for the backend and **React.js** for the frontend. The project is designed to provide a platform with project listings, services, job opportunities, and more. The application follows a modern software development approach with clean separation of frontend and backend logic.

---

## Overview

This project consists of two main parts:

1. **Backend (Spring Boot)**: A REST API serving data about projects, services, jobs, and client requests.
2. **Frontend (React.js)**: A web interface that interacts with the backend API, providing users with a dynamic and responsive experience.

---

## Table of Contents

- [Backend](#backend)
  - [Repositories](#repositories)
  - [Entities](#entities)
  - [DTOs (Data Transfer Objects)](#dtos-data-transfer-objects)
  - [Setup Instructions](#setup-instructions)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
  - [Directory Structure](#directory-structure)
  - [Setup Instructions](#frontend-setup-instructions)
- [Full Stack Integration](#full-stack-integration)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

---

## Backend

### Repositories
The repositories provide an interface to the database. They extend Spring Data JPA interfaces to perform CRUD operations on the entities. Examples include:
- **`ProjectRepository`**: Manages project data
- **`ServicesRepository`**: Handles services data
- **`JobsRepository`**: Manages job listings

### Entities
The entities represent the data model of the application. They are mapped to database tables using JPA annotations. Examples include:
- **`Project`**: Represents a project
- **`Services`**: Represents a service offered
- **`Jobs`**: Represents a job listing
- **`Request`**: Represents a client request
- **`AboutUs`**: Represents about us information

### DTOs (Data Transfer Objects)
DTOs are used to transfer data between the client and server. They define the structure of the data that is sent to and received from the frontend. Examples include:
- **`HomeDTO`**: Contains data for the home page
- **`ProjectsDetailDTO`**: Contains detailed project information
- **`ServicesDTO`**: Contains services information
- **`JobsDTO`**: Contains job listing information

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/flor4ly/WP_Project2.git
cd WP_Project2/backend
```

#### 2. Set Up the Database
The application uses PostgreSQL as its database. You can set it up using Docker Compose:

```bash
docker-compose up -d
```

This will start a PostgreSQL database and pgAdmin (a PostgreSQL administration tool) in Docker containers.

PostgreSQL will be available at localhost:5432

Database: myappdb

Username: user

Password: pass

pgAdmin will be available at http://localhost:5050

Email: admin@admin.com

Password: admin

#### 3. Build the Application
Build the Spring Boot application using Maven:

```bash
mvn clean install
```

#### 4. Run the Application
Start the Spring Boot application:

```bash
mvn spring-boot:run
```

The application will start and be available at http://localhost:8080.

### API Endpoints
The backend provides the following API endpoints:

- `/api/home`: Get home page data
- `/api/about`: Get about us information
- `/api/projects`: Get project listings
- `/api/projects/{id}`: Get details of a specific project
- `/api/services`: Get services information
- `/api/services/{id}`: Get details of a specific service
- `/api/jobs`: Get job listings
- `/api/jobs/{id}`: Get details of a specific job
- `/api/request`: Submit a client request

## Frontend

### Getting Started
This project was bootstrapped with Create React App.

### Available Scripts
In the project directory, you can run:

- `npm start`: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

### Directory Structure
Frontend Directory:

Purpose: Contains React.js components and frontend code.

Files:

- `src/`: Main source code for the React application
- `components/`: Reusable UI components
- `pages/`: Page-level components (e.g., Home, Projects, Careers)
- `services/`: Handles API calls to the backend
- `styles/`: Contains CSS files for styling
- `App.js`: Main React app file


## Full Stack Integration

The frontend communicates with the backend through API requests. The React app makes HTTP requests to the Spring Boot API to fetch and display data.

### API Requests:
- `GET /api/home`: Fetches home page data
- `GET /api/projects`: Fetches list of projects
- `GET /api/services`: Fetches list of services
- `GET /api/jobs`: Fetches list of job listings

The frontend uses Axios for making API requests.

## Deployment

For full-stack deployment, you can deploy the frontend and backend separately or together using Docker Compose.

### Docker Compose Setup

```bash
docker-compose up -d
```

This will start both the backend (Spring Boot) and frontend (React.js) in Docker containers.

## Conclusion

This repository contains a full-stack website with a backend built using Spring Boot and a frontend built using React.js. It provides a platform for managing projects, services, jobs, and more. You can set up and run the application locally for development, testing, and production purposes.

For any issues or questions, feel free to reach out to the maintainers or create an issue on the GitHub repository.
