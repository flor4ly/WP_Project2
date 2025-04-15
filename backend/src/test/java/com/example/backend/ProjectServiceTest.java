package com.example.backend;

import com.example.backend.entities.Project;
import com.example.backend.entities.Services;
import com.example.backend.repositories.ProjectRepository;
import com.example.backend.repositories.ServiceRepository;
import com.example.backend.services.ProjectService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ProjectServiceTest {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @BeforeEach
    public void setup() {
        serviceRepository.deleteAll();
        projectRepository.deleteAll();
    }

    @Test
    public void testCreateProject() {
        Project project = new Project();
        project.setTitle("Website Revamp");
        project.setDescription("Redesign the UI/UX");

        Project saved = projectService.createProject(project);
        assertNotNull(saved.getId());
        assertEquals("Website Revamp", saved.getTitle());
    }

//    @Test
//    public void testAddServiceToProject() {
//        // Create project
//        Project project = new Project();
//        project.setTitle("E-commerce");
//        project.setDescription("Build full-stack store");
//        project = projectService.createProject(project);
//
//        // Create service
//        Services service = new Services();
//        service.setTitle("Backend Development");
//        service = serviceRepository.save(service);
//
//        // Add service to project
//        Project updated = projectService.addServiceToProject(project.getId(), service.getId());
//
//        // Assert service is added to project
//        assertEquals(1, updated.getServices().size());
//        assertTrue(updated.getServices().contains(service)); // Check if the service is indeed added
//    }

//    @Test
//    public void testRemoveServiceFromProject() {
//        // Create project
//        Project project = new Project();
//        project.setTitle("E-commerce");
//        project.setDescription("Build full-stack store");
//        project = projectService.createProject(project);
//
//        // Create service
//        Services service = new Services();
//        service.setTitle("Backend Development");
//        service = serviceRepository.save(service);
//
//        // Add service to project
//        projectService.addServiceToProject(project.getId(), service.getId());
//
//    }

    @Test
    public void testGetAllProjects() {
        Project p1 = new Project();
        p1.setTitle("Project A");
        p1.setDescription("Desc A");

        Project p2 = new Project();
        p2.setTitle("Project B");
        p2.setDescription("Desc B");

        projectService.createProject(p1);
        projectService.createProject(p2);

        List<Project> all = projectService.getAllProjects();
        assertEquals(2, all.size());
    }

    @Test
    public void testGetProjectWithServices() {
        Project project = new Project();
        project.setTitle("Analytics Dashboard");
        project.setDescription("Data visualization");
        project = projectService.createProject(project);

        Project fetched = projectService.getProjectWithServices(project.getId());
        assertEquals("Analytics Dashboard", fetched.getTitle());
    }

//    @Test
//    public void testAddServiceToInvalidProject_ThrowsException() {
//        Services service = new Services();
//        service.setTitle("Cloud Setup");
//        service = serviceRepository.save(service);
//
//        Services finalService = service;
//        Exception exception = assertThrows(RuntimeException.class, () -> {
//            projectService.addServiceToProject(999L, finalService.getId());
//        });
//
//        assertEquals("Project not found", exception.getMessage());
//    }

    @Test
    public void testAddInvalidServiceToProject_ThrowsException() {
        Project project = new Project();
        project.setTitle("DevOps Setup");
        project.setDescription("CI/CD Pipelines");
        project = projectService.createProject(project);

        Project finalProject = project;
        Exception exception = assertThrows(RuntimeException.class, () -> {
            projectService.addServiceToProject(finalProject.getId(), 999L);
        });

        assertEquals("Service not found", exception.getMessage());
    }
}
