package com.example.backend.controllers;

import com.example.backend.dto.ProjectsDetailDTO;
import com.example.backend.entities.Project;
import com.example.backend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<ProjectsDetailDTO> getAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        return projects.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ProjectsDetailDTO getProjectById(@PathVariable Long id) {
        Project project = projectService.getProjectWithServices(id);
        return mapToDTO(project);
    }

    @PostMapping
    public ProjectsDetailDTO createProject(@RequestBody ProjectsDetailDTO dto) {
        Project project = mapToEntity(dto);
        Project saved = projectService.createProject(project);
        return mapToDTO(saved);
    }

    // Mappers
    private ProjectsDetailDTO mapToDTO(Project project) {
        return new ProjectsDetailDTO(
                project.getId(),
                project.getTitle(),
                project.getThumbnail(),
                project.getDescription(),
                project.getImg_urls(),
                project.getLogo(),
                project.getLink_to_website()
        );
    }

    private Project mapToEntity(ProjectsDetailDTO dto) {
        Project project = new Project();
        project.setId(dto.getId());
        project.setTitle(dto.getTitle());
        project.setThumbnail(dto.getThumbnail());
        project.setDescription(dto.getDescription());
        project.setImg_urls(dto.getImg_urls());
        project.setLogo(dto.getLogo());
        project.setLink_to_website(dto.getLink_to_website());
        return project;
    }
}
