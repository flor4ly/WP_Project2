# Backend Controllers

This directory contains all the controllers that define the REST API endpoints for interacting with backend entities.

---

## 1. CompanyController

- **Base URL**: `/api/companies`
- **Endpoints**:
    - `GET /api/companies` – Get all companies
    - `POST /api/companies` – Create a new company
    - `PUT /api/companies/{id}` – Update a company by ID
    - `DELETE /api/companies/{id}` – Delete a company by ID

---

## 2. JobApplicationController

- **Base URL**: `/api/job-applications`
- **Endpoints**:
    - `POST /api/job-applications/apply` – Submit a job application
        - **Request Params (Form-Data)**:
            - `name`: `String`
            - `phone`: `String`
            - `resume`: `MultipartFile (.pdf/.docx)`
            - `jobId`: `Long`
    - `GET /api/job-applications` – Get all job applications

---

Each controller delegates to its respective service to handle business logic.

Make sure your backend is connected to a running PostgreSQL instance for data persistence, and that file upload directories (e.g., `resumes/`) are writable and properly created during runtime.
