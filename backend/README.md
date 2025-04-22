# Backend Application

## Overview
This is the backend component of the full-stack web application. It is built using Spring Boot, a powerful Java framework for building web applications. The backend provides RESTful APIs, processes business logic, and manages database integration for the frontend application.

## Project Structure
The backend follows a standard Spring Boot project structure:

```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── backend/
│   │   │               ├── controllers/    # REST API endpoints
│   │   │               ├── dto/            # Data Transfer Objects
│   │   │               ├── entities/       # JPA Entity classes
│   │   │               ├── repositories/   # Data access interfaces
│   │   │               ├── services/       # Business logic
│   │   │               ├── BackendApplication.java  # Main application class
│   │   │               └── CorsConfig.java  # CORS configuration
│   │   └── resources/
│   │       └── application.properties  # Application configuration
│   └── test/
│       └── java/
│           └── com/
│               └── example/
│                   └── backend/
│                       └── BackendApplicationTests.java
├── docker-compose.yml  # Docker configuration
├── mvnw                # Maven wrapper script (Unix)
├── mvnw.cmd            # Maven wrapper script (Windows)
├── pom.xml             # Project dependencies and build configuration
└── README.md           # This file
```

## Key Components

### Controllers
The controllers handle HTTP requests and define the API endpoints. They are responsible for processing incoming requests and returning appropriate responses. Examples include:
- `HomeController`: Provides data for the home page
- `AboutUsController`: Manages about us information
- `ProjectDetailController`: Handles project details
- `ServicesController`: Manages services information
- `JobsController`: Handles job listings

### Services
The services contain the business logic of the application. They process data, perform calculations, and interact with repositories to access the database. Examples include:
- `HomePageService`: Retrieves data for the home page
- `ProjectsDetailService`: Manages project details
- `ServicesService`: Handles services-related operations
- `JobsService`: Manages job listings

### Repositories
The repositories provide an interface to the database. They extend Spring Data JPA interfaces to perform CRUD operations on the entities. Examples include:
- `ProjectRepository`: Manages project data
- `ServicesRepository`: Handles services data
- `JobsRepository`: Manages job listings

### Entities
The entities represent the data model of the application. They are mapped to database tables using JPA annotations. Examples include:
- `Project`: Represents a project
- `Services`: Represents a service offered
- `Jobs`: Represents a job listing
- `Request`: Represents a client request
- `AboutUs`: Represents about us information

### DTOs (Data Transfer Objects)
DTOs are used to transfer data between the client and server. They define the structure of the data that is sent to and received from the frontend. Examples include:
- `HomeDTO`: Contains data for the home page
- `ProjectsDetailDTO`: Contains detailed project information
- `ServicesDTO`: Contains services information
- `JobsDTO`: Contains job listing information

## Prerequisites
- Java 21 or higher
- Maven 3.6 or higher
- Docker and Docker Compose (for running the database)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/flor4ly/WP_Project2.git
cd WP_Project2/backend
```

### 2. Set Up the Database
The application uses PostgreSQL as its database. You can set it up using Docker Compose:

```bash
docker-compose up -d
```

This will start a PostgreSQL database and pgAdmin (a PostgreSQL administration tool) in Docker containers.

- PostgreSQL will be available at `localhost:5432`
  - Database: `myappdb`
  - Username: `user`
  - Password: `pass`
- pgAdmin will be available at `http://localhost:5050`
  - Email: `admin@admin.com`
  - Password: `admin`

### 3. Build the Application
```bash
mvn clean install
```

### 4. Run the Application
```bash
mvn spring-boot:run
```

The application will start and be available at `http://localhost:8080`.

## API Endpoints
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

## Development
The application uses Spring Boot DevTools for development, which provides features like automatic restart when code changes. To take advantage of this, run the application with:

```bash
mvn spring-boot:run
```

## Testing
To run the tests:

```bash
mvn test
```

## Building for Production
To build the application for production:

```bash
mvn clean package
```

This will create a JAR file in the `target` directory that can be deployed to a production environment.