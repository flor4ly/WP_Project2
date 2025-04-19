package com.example.backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HomeDTO {
    private List<HomeProjectsDTO> featuredProjects;
    private List<HomeJobsDTO> jobListings;
    private List<ServicesDTO> featuredServices;
}
