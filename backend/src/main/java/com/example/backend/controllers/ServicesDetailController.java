package com.example.backend.controllers;

import com.example.backend.dto.ProjectsDetailDTO;
import com.example.backend.services.ProjectsDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ServicesDetailController {

    private final ProjectsDetailService projectsDetailService;

    // GET /api/services/{id}/projects
    @GetMapping("/{id}/projects")
    public List<ProjectsDetailDTO> getProjectsByServiceId(@PathVariable Long id) {
        return projectsDetailService.getProjectsByServiceId(id);
    }
}
