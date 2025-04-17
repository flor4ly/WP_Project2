# dto/

## Purpose
This directory contains **Data Transfer Objects (DTOs)** used to transfer data between the backend and frontend without exposing internal entity logic or database models.

---

## Files

- **CompanyDTO.java**
    - Represents a simplified version of the `Company` entity.
    - Used for both **sending** and **receiving** data in `CompanyController`.
    - Fields:
        - `id`
        - `title`
        - `description`
        - `img_urls`
        - `num_projects`
        - `num_members`
        - `num_reviews`
        - `num_awards`
        - `our_vision`
        - `our_mission`

---

## Notes
- DTOs keep the code clean and secure by not exposing the entity directly to external requests.
- Helpful when the frontend doesn’t need the entire entity or requires a different format.
