package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class HomeDTO {
    private List<CompanyDTO> featuredCompanies; // Highlighted companies
    private List<ProjectDTO> featuredProjects;  // Highlighted projects
    private List<JobsDTO> jobListings;          // Job opportunities
    private List<ServicesDTO> featuredServices; // Highlighted services

    public HomeDTO() {}

    public HomeDTO(List<CompanyDTO> featuredCompanies, List<ProjectDTO> featuredProjects,
                   List<JobsDTO> jobListings, List<ServicesDTO> featuredServices) {
        this.featuredCompanies = featuredCompanies;
        this.featuredProjects = featuredProjects;
        this.jobListings = jobListings;
        this.featuredServices = featuredServices;
    }
}
