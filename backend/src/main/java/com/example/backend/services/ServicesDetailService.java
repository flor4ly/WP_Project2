package com.example.backend.services;

import com.example.backend.dto.*;
import com.example.backend.entities.Services;
import com.example.backend.entities.Project;
import com.example.backend.repositories.ServicesRepository;
import com.example.backend.repositories.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServicesDetailService {
    private final ServicesRepository serviceRepository;
    private final ProjectRepository projectRepository;

    public ServicesDetailDTO getServicesDetailByIds(List<Long> serviceIds, List<Long> projectIds) {
        if (serviceIds.isEmpty() && projectIds.isEmpty()) {
            throw new IllegalArgumentException("At least one serviceId or projectId must be provided");
        }

        List<ServicesDTO> services = serviceIds.isEmpty()
                ? List.of()
                : serviceRepository.findAllById(serviceIds).stream()
                .map(this::mapToServiceDto)
                .toList();

        List<HomeProjectsDTO> projects = projectIds.isEmpty()
                ? List.of()
                : projectRepository.findAllById(projectIds).stream()
                .map(this::mapToProjectDto)
                .toList();

        return new ServicesDetailDTO(services, projects);
    }

    private ServicesDTO mapToServiceDto(Services service) {
        return new ServicesDTO(
                service.getId(),
                service.getTitle(),
                service.getDescription()
        );
    }

    private HomeProjectsDTO mapToProjectDto(Project project) {
        return new HomeProjectsDTO(
                project.getId(),
                project.getTitle(),
                project.getThumbnail(),
                project.getDescription(),
                project.getServices() != null ? project.getServices().getId() : null
        );
    }


}