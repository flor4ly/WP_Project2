package com.example.backend.controllers;

import com.example.backend.dto.HomeProjectsDTO;
import com.example.backend.services.HomeProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home-projects")
@RequiredArgsConstructor
public class HomeProjectController {

    private final HomeProjectService homeProjectService;

    @PostMapping
    public ResponseEntity<HomeProjectsDTO> createProject(@RequestBody HomeProjectsDTO projectDTO) {
        HomeProjectsDTO createdProject = homeProjectService.createProject(projectDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProject);
    }

    @GetMapping
    public ResponseEntity<List<HomeProjectsDTO>> getAllProjects() {
        List<HomeProjectsDTO> projects = homeProjectService.getAllProjects();
        return ResponseEntity.ok(projects);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HomeProjectsDTO> getProjectById(@PathVariable Long id) {
        HomeProjectsDTO project = homeProjectService.getProjectById(id);
        return ResponseEntity.ok(project);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        homeProjectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}