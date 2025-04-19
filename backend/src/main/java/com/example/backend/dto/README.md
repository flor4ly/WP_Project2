# DTO Directory Documentation

## Purpose

The DTO (Data Transfer Object) directory contains classes designed to streamline data exchange between the backend and frontend. These DTOs ensure efficient transfer, validation, and aggregation of data while maintaining separation between application entities and API-facing models.

## Files and Roles

### `CompanyDTO`
- Provides detailed information about a company, including attributes such as title, description, vision, mission, and statistics (e.g., number of projects, members, awards, and reviews).
- Used for sending company-related data to the frontend.

### `HomeDTO`
- Aggregates featured data for the home view, including projects, job listings, and services.
- Acts as a container for other nested DTOs like `HomeProjectsDTO`, `HomeJobsDTO`, and `ServicesDTO`.

### `HomeJobsDTO`
- Represents lightweight job listings with only id and title fields.
- Designed for compact data transfer to the frontend.

### `HomeProjectsDTO`
- Provides key details about projects, including attributes such as id, title, thumbnail, and description.
- Optimized for use on the home view.

### `JobApplicationDTO`
- Captures application data submitted by job seekers, including their name, phone, resume path, and the associated job ID.
- Designed for receiving user input from the frontend.

### `JobsDetailDTO`
- Represents detailed information about a job, including requirements, skills, and conditions.
- Used for comprehensive job data transfer.

### `ProjectsDetailDTO`
- Provides enriched project details, including thumbnails, images, logos, and links to external websites.
- Used for detailed project information transfer.

### `RequestDTO`
- Handles incoming requests with fields for company name, user name, phone number, and descriptions.
- Includes validation annotations to ensure data integrity.

### `ServicesDetailDTO`
- Aggregates featured services and projects for service-related views.
- Combines lists of `ServicesDTO` and `HomeProjectsDTO` for efficient data transfer.

### `ServicesDTO`
- Represents core service data with fields for id, title, and description.
- Used for sending service-related data to the frontend.

## Important Details
- The DTO classes leverage Lombok annotations (`@Getter`, `@Setter`, `@AllArgsConstructor`, `@NoArgsConstructor`) to minimize boilerplate code and improve maintainability.
- Validation annotations (e.g., `@NotBlank`, `@Size`, `@Pattern`) are applied to receiving DTOs like `RequestDTO` to ensure frontend-sent data adheres to expected formats and constraints.
- Nested DTOs like `HomeProjectsDTO` and `HomeJobsDTO` enable compact and context-specific data transfer, reducing payload size and optimizing performance.
