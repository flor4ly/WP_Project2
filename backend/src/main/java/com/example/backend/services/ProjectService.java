package com.example.backend.services;

import com.example.backend.entities.Project;
import com.example.backend.entities.Services;
import com.example.backend.repositories.ProjectRepository;
import com.example.backend.repositories.ServiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final ServiceRepository serviceRepository;

    public ProjectService(ProjectRepository projectRepository, ServiceRepository serviceRepository) {
        this.projectRepository = projectRepository;
        this.serviceRepository = serviceRepository;
    }


    public Project createProject(Project project) {
        return projectRepository.save(project);
    }


    public Project addServiceToProject(Long projectId, Long serviceId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));
        Services service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        project.addService(service);
        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectWithServices(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }
}