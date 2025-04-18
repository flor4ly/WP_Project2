# dto/

## Purpose
This directory contains **Data Transfer Objects (DTOs)** used to transfer data between the backend and frontend without exposing internal entity logic or database models.

---

## Files

CompanyDTO.java: Encapsulates company-related information like name, description, and statistics for backend-to-frontend communication.

JobsDTO.java: Represents job-related details, such as title, pay, requirements, and conditions.

JobApplicationDTO.java: Simplifies job application data, including applicant details, resume paths, and associated job references.

ProjectDTO.java: Handles project information like title, description, thumbnail, and associated services.

RequestDTO.java: Represents data for service requests made by companies, including service details and company-specific information.

ServicesDTO.java: Contains data for services, such as title and description, to be shared with the frontend.

HomeDTO.java: Aggregates multiple datasets for the homepage, including featured companies, projects, job listings, and services.

## Notes
- DTOs keep the code clean and secure by not exposing the entity directly to external requests.
- Helpful when the frontend doesn’t need the entire entity or requires a different format.
