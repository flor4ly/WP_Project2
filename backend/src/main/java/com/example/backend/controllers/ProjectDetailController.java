package com.example.backend.controllers;

import com.example.backend.dto.ProjectsDetailDTO;
import com.example.backend.services.ProjectsDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectDetailController {

    private final ProjectsDetailService projectService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectsDetailDTO createProject(@RequestBody ProjectsDetailDTO projectDTO) {
        return projectService.createProject(projectDTO);
    }

    @GetMapping
    public List<ProjectsDetailDTO> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public ProjectsDetailDTO getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }
}