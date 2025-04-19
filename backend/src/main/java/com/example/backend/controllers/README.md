# Controllers Documentation

## CompanyController

**Base URL:** `/api/companies`

Handles all company-related endpoints including creation, fetching, updating, and deleting company data.

### Endpoints:

- `GET /api/companies`  
  Fetch all companies.  
  **Returns:** List of `CompanyDTO`

- `GET /api/companies/{id}`  
  Fetch a single company by ID.  
  **Returns:** `CompanyDTO` if found, otherwise 404 Not Found

- `POST /api/companies`  
  Create a new company.  
  **Body:** `CompanyDTO`  
  **Returns:** Created `CompanyDTO`

- `PUT /api/companies/{id}`  
  Update an existing company by ID.  
  **Body:** `CompanyDTO`  
  **Returns:** Updated `CompanyDTO` if found, otherwise 404 Not Found

- `DELETE /api/companies/{id}`  
  Delete a company by ID.  
  **Returns:** JSON message using `ApiResponse` with success flag

---

More controller info will be added as we implement them.
