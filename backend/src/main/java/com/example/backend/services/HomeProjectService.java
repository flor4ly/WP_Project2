package com.example.backend.services;

import com.example.backend.dto.HomeProjectsDTO;
import com.example.backend.entities.Project;
import com.example.backend.entities.Services;
import com.example.backend.repositories.ProjectRepository;
import com.example.backend.repositories.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeProjectService {

    private final ProjectRepository projectRepository;
    private final ServiceRepository serviceRepository;

    @Transactional
    public HomeProjectsDTO createProject(HomeProjectsDTO projectDTO) {
        Project project = mapDtoToEntity(projectDTO);
        Project savedProject = projectRepository.save(project);
        return mapEntityToDto(savedProject);
    }

    public List<HomeProjectsDTO> getAllProjects() {
        return projectRepository.findAll().stream()
                .map(this::mapEntityToDto)
                .toList();
    }

    public HomeProjectsDTO getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        return mapEntityToDto(project);
    }

    public List<HomeProjectsDTO> getProjectsByServiceId(Long serviceId) {
        return projectRepository.findByServicesId(serviceId).stream()
                .map(this::mapEntityToDto)
                .toList();
    }

    @Transactional
    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new RuntimeException("Project not found with id: " + id);
        }
        projectRepository.deleteById(id);
    }

    private Project mapDtoToEntity(HomeProjectsDTO dto) {
        Project project = new Project();
        project.setTitle(dto.getTitle());
        project.setThumbnail(dto.getThumbnail());
        project.setDescription(dto.getDescription());

        if (dto.getServicesId() != null) {
            Services service = serviceRepository.findById(dto.getServicesId())
                    .orElseThrow(() -> new RuntimeException("Service not found with id: " + dto.getServicesId()));
            project.setServices(service);
        }

        return project;
    }

    private HomeProjectsDTO mapEntityToDto(Project project) {
        return new HomeProjectsDTO(
                project.getId(),
                project.getTitle(),
                project.getThumbnail(),
                project.getDescription(),
                project.getServices() != null ? project.getServices().getId() : null
        );
    }
}