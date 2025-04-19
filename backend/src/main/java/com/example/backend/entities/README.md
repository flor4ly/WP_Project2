# Entities Directory Documentation

## Purpose
The `entities` directory contains JPA entity classes that directly represent database tables. These entities define the application's data structure and establish relationships between different tables.

---

## Files and Their Roles
- **`Company.java`**: Represents the company table, including fields like name, description, and statistics.
- **`Jobs.java`**: Models job postings, including title, requirements, salary, and relationships to applications.
- **`JobApplication.java`**: Represents job applications with applicant details and relationships to jobs.
- **`Project.java`**: Defines projects with associated data like title, description, and services.
- **`Request.java`**: Represents service requests made by companies, including associated services.
- **`Services.java`**: Models services offered, including title and description.

---

## Important Details
- **Annotations**:
    - Each entity uses JPA annotations like `@Entity`, `@Id`, and `@GeneratedValue` to map Java objects to database tables.
    - Relationships are defined with annotations like `@OneToMany`, `@ManyToOne`, and `@JoinColumn`.
- **Relationships**:
    - `Company` may have relationships with `Request` or `Project`.
    - `Jobs` has a `OneToMany` relationship with `JobApplication`.
    - `Project` references associated `Services` with a `ManyToMany` relationship.

---

## Notes
- These entities form the backbone of the application's data layer.
- Changes to these classes directly affect the database schema and relationships.
