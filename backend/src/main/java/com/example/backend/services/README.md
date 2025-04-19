# Services Directory Documentation

## Purpose
The `services` directory contains business logic service classes that act as intermediaries between controllers and repositories. These classes process data, apply business rules, and interact with repositories to fetch or save information.

---

## Files and Their Roles
- **`CompanyService.java`**: Implements business logic for managing `Company` entities, including CRUD operations.
- **`JobsService.java`**: Manages job-related business logic, including creating, updating, and fetching job listings.
- **`JobApplicationService.java`**: Handles business logic for processing job applications, including file uploads and linking applications to jobs.
- **`ProjectService.java`**: Implements operations for `Project` entities, including managing associated services.
- **`RequestService.java`**: Processes incoming requests for services from companies, applying business rules as needed.
- **`ServicesService.java`**: Handles operations related to services, including CRUD functionality.

---

## Important Details
- **Dependency Injection**:
    - Services use `@Autowired` annotations to inject repositories.
- **DTO Mapping**:
    - Service methods often map entities to DTOs for clean data transfer to controllers.
- **Business Rules**:
    - Services ensure that any rules or validations are applied before interacting with the database.
