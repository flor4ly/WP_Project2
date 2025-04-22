# Controllers Documentation

## 1. AboutUsController

**Base URL:** `/api/about-us`

Handles all operations related to About Us data, including fetching, creating, and deleting entries.

### Endpoints:

- `GET /api/about-us/{id}`  
  Fetch the data for a specific About Us entry by its ID.  
  **Returns:** `AboutUsDTO`

- `GET /api/about-us`  
  Fetch all About Us data.  
  **Returns:** List of `AboutUsDTO`

- `POST /api/about-us`  
  Create a new About Us entry.  
  **Body:** `AboutUsDTO`  
  **Returns:** Created `AboutUsDTO`

- `DELETE /api/about-us/{id}`  
  Delete an About Us entry by its ID.  
  **Returns:** No Content

---

## 2. HomeController

**Base URL:** `/api/home`

Handles fetching the homepage data.

### Endpoints:

- `GET /api/home`  
  Fetch the homepage data.  
  **Returns:** `HomeDTO`

---

## 3. HomeProjectController

**Base URL:** `/api/home-projects`

Handles operations related to home projects, including creation, fetching, and deletion.

### Endpoints:

- `POST /api/home-projects`  
  Create a new Home Project entry.  
  **Body:** `HomeProjectsDTO`  
  **Returns:** Created `HomeProjectsDTO`

- `GET /api/home-projects`  
  Fetch all Home Projects.  
  **Returns:** List of `HomeProjectsDTO`

- `GET /api/home-projects/{id}`  
  Fetch a specific Home Project by its ID.  
  **Returns:** `HomeProjectsDTO`

- `DELETE /api/home-projects/{id}`  
  Delete a Home Project by its ID.  
  **Returns:** No Content

---

## 4. JobApplicationController

**Base URL:** `/api/applications`

Handles operations related to job applications, including applying for jobs.

### Endpoints:

- `POST /api/applications/apply`  
  Apply for a job by submitting name, phone, resume, and job ID.  
  **Request Params:**
  - `name`: Applicant's name
  - `phone`: Applicant's phone number
  - `resume`: Uploaded resume (file)
  - `jobId`: Job ID  
    **Returns:** Success or failure message

---

## 5. JobsController

**Base URL:** `/api/jobs`

Handles operations related to job listings and details, including creation, fetching, and deletion.

### Endpoints:

- `GET /api/jobs/listing`  
  Fetch all job listings.  
  **Returns:** List of `JobsDTO`

- `POST /api/jobs/listing`  
  Create a new job listing.  
  **Body:** `JobsDTO`  
  **Returns:** Created `JobsDTO`

- `DELETE /api/jobs/listing/{id}`  
  Delete a job listing by its ID.  
  **Returns:** No Content

- `GET /api/jobs/detail`  
  Fetch all job details.  
  **Returns:** List of `JobsDetailDTO`

- `GET /api/jobs/detail/{id}`  
  Fetch detailed information of a job by its ID.  
  **Returns:** `JobsDetailDTO`

- `POST /api/jobs/detail`  
  Create a new job detail.  
  **Body:** `JobsDetailDTO`  
  **Returns:** Created `JobsDetailDTO`

- `DELETE /api/jobs/detail/{id}`  
  Delete a job detail by its ID.  
  **Returns:** No Content

---

## 6. ProjectDetailController

**Base URL:** `/api/projects`

Handles all project-related operations, including creating and fetching project information.

### Endpoints:

- `POST /api/projects`  
  Create a new project.  
  **Body:** `ProjectsDetailDTO`  
  **Returns:** Created `ProjectsDetailDTO`

- `GET /api/projects`  
  Fetch all projects.  
  **Returns:** List of `ProjectsDetailDTO`

- `GET /api/projects/{id}`  
  Fetch a specific project by its ID.  
  **Returns:** `ProjectsDetailDTO`

- `DELETE /api/projects/{id}`  
  Delete a project by its ID.  
  **Returns:** No Content

---

## 7. RequestController

**Base URL:** `/api/service-requests`

Handles operations related to service requests, including submission of service requests.

### Endpoints:

- `POST /api/service-requests/submit`  
  Submit a service request with company info, description, and service ID.  
  **Request Params:**
  - `companyName`: Name of the company
  - `name`: Contact person's name
  - `number`: Contact number
  - `description`: Description of the request
  - `serviceId`: Service ID  
    **Returns:** Success or failure message

---

## 8. ServicesController

**Base URL:** `/api/services`

Handles operations related to services, including creation, fetching, and deletion of service data.

### Endpoints:

- `POST /api/services`  
  Create a new service.  
  **Body:** `ServicesDTO`  
  **Returns:** Created `ServicesDTO`

- `GET /api/services`  
  Fetch all services.  
  **Returns:** List of `ServicesDTO`

- `GET /api/services/{id}`  
  Fetch a specific service by its ID.  
  **Returns:** `ServicesDTO`

- `DELETE /api/services/{id}`  
  Delete a service by its ID.  
  **Returns:** No Content

---

## 9. ServicesDetailController

**Base URL:** `/api/services`

Handles operations related to service projects, including fetching projects by service ID.

### Endpoints:

- `GET /api/services/{id}/projects`  
  Fetch all projects related to a service by its ID.  
  **Returns:** List of `ProjectsDetailDTO`

---
