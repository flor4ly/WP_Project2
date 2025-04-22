# Repositories Directory Documentation

## Purpose
The `repositories` directory contains JPA repository interfaces that handle database operations. These repositories are responsible for interacting with the database to perform CRUD (Create, Read, Update, Delete) operations and custom queries.

---

## Files and Their Roles
- **`CompanyRepository.java`**: Provides database access methods for `Company` entities.
- **`JobsRepository.java`**: Handles CRUD operations for job-related data in the `Jobs` table.
- **`JobApplicationRepository.java`**: Manages access to `JobApplication` entities, including saving and retrieving applications.
- **`ProjectRepository.java`**: Supports data operations for `Project` entities, including managing associated services.
- **`RequestRepository.java`**: Provides database access methods for `Request` entities, including queries for service requests.
- **`ServicesRepository.java`**: Handles CRUD operations for services offered by the application.

---

## Important Details
- **Annotations**:
    - All repositories extend `JpaRepository` for easy access to standard CRUD methods.
- **Custom Queries**:
    - If needed, custom queries can be defined using method names or `@Query` annotations.
- **Usage**:
    - Repositories are injected into service classes using `@Autowired` annotations to handle data operations.
