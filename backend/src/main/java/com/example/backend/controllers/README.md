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

## JobApplicationController

**Base URL:** `/api/job-applications`

Handles operations related to job applications.

### Endpoints:

- `POST /api/job-applications/apply`  
  Apply for a job.  
  **Request Params:**
  - `name`: String
  - `phone`: String
  - `resume`: MultipartFile (uploaded file)
  - `jobId`: Long  
    **Response:** Created `JobApplicationDTO`

- `GET /api/job-applications`  
  Fetch all job applications.  
  **Returns:** List of `JobApplicationDTO`

---

## JobsController

**Base URL:** `/api/jobs`

Handles operations related to jobs, including creation, fetching, updating, and deleting job data.

### Endpoints:

- `GET /api/jobs`  
  Fetch all jobs.  
  **Returns:** List of `JobsDTO`

- `GET /api/jobs/{id}`  
  Fetch a single job by ID.  
  **Returns:** `JobsDTO` if found, otherwise 404 Not Found

- `POST /api/jobs`  
  Create a new job.  
  **Body:** `JobsDTO`  
  **Returns:** Created `JobsDTO`

- `PUT /api/jobs/{id}`  
  Update an existing job by ID.  
  **Body:** `JobsDTO`  
  **Returns:** Updated `JobsDTO` if found, otherwise 404 Not Found

- `DELETE /api/jobs/{id}`  
  Delete a job by ID.  
  **Returns:** JSON message with success flag

---

More controller info will be added as we implement them.
