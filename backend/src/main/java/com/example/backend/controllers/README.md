# controllers/

This folder contains all the REST controllers for the backend.

---

### CompanyController.java

**Base URL:** `/api/companies`

#### Endpoints:
- `GET /api/companies` → Get all companies
- `GET /api/companies/{id}` → Get a company by ID
- `POST /api/companies` → Create a new company
- `PUT /api/companies/{id}` → Update an existing company
- `DELETE /api/companies/{id}` → Delete a company

---

Each controller talks to the service layer and handles HTTP request/response.
