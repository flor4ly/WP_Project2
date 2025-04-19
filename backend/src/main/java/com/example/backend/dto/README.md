# DTO Directory Documentation

## Purpose
This directory contains **Data Transfer Objects (DTOs)**, which facilitate data transfer between the backend and frontend while hiding internal entity logic and database models. DTOs ensure structured communication and enhance security by limiting exposure of sensitive or unnecessary fields.

---

## Files and Their Roles

- **CompanyDTO.java**: Encapsulates company-related information such as name, description, and statistics for backend-to-frontend communication.
- **JobsDTO.java**: Represents job details, including title, salary, requirements, and conditions to share job postings efficiently.
- **JobApplicationDTO.java**: Simplifies job application data by representing applicant details, resume paths, and associated job references.
- **ProjectDTO.java**: Manages project information, including title, description, thumbnail, and relationships with services.
- **RequestDTO.java**: Represents company requests for services with details such as company name and associated services.
- **ServicesDTO.java**: Contains service-related data like title and description to communicate service offerings effectively.
- **HomeDTO.java**: Aggregates homepage data by bundling featured companies, projects, job listings, and services into a single DTO.

---

## Notes
- **Security**: DTOs prevent exposing the full entity or database structure, making the application more secure.
- **Efficiency**: DTOs ensure only required fields are sent to the frontend, reducing data transfer overhead.
- **Mapping**: DTOs are mapped to and from entities in service layer methods.
