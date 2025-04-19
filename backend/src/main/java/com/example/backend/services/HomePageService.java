package com.example.backend.services;

import com.example.backend.dto.HomeDTO;
import com.example.backend.dto.HomeJobsDTO;
import com.example.backend.dto.HomeProjectsDTO;
import com.example.backend.dto.ServicesDTO;
import com.example.backend.repositories.JobsRepository;
import com.example.backend.repositories.ProjectRepository;
import com.example.backend.repositories.ServicesRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HomePageService {

    private final ProjectRepository projectsRepository;
    private final JobsRepository jobsRepository;
    private final ServicesRepository servicesRepository;

    public HomePageService(ProjectRepository projectsRepository,
                           JobsRepository jobsRepository,
                           ServicesRepository servicesRepository) {
        this.projectsRepository = projectsRepository;
        this.jobsRepository = jobsRepository;
        this.servicesRepository = servicesRepository;
    }

    public HomeDTO getHomepageData() {
        List<HomeProjectsDTO> projectDTOs = projectsRepository.findTop7ByOrderByIdDesc().stream()
                .map(project -> new HomeProjectsDTO(
                        project.getId(),
                        project.getTitle(),
                        project.getThumbnail(),
                        project.getDescription(),
                        project.getServices().getId()
                ))
                .collect(Collectors.toList());

        List<HomeJobsDTO> jobDTOs = jobsRepository.findTop3ByOrderByIdDesc().stream()
                .map(job -> new HomeJobsDTO(
                        job.getId(),
                        job.getTitle()
                ))
                .collect(Collectors.toList());

        List<ServicesDTO> serviceDTOs = servicesRepository.findTop4ByOrderByIdDesc().stream()
                .map(service -> new ServicesDTO(
                        service.getId(),
                        service.getTitle(),
                        service.getDescription()
                ))
                .collect(Collectors.toList());

        return new HomeDTO(projectDTOs, jobDTOs, serviceDTOs);
    }
}
