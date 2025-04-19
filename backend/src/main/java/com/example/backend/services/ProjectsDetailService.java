package com.example.backend.services;

import com.example.backend.dto.ProjectsDetailDTO;
import com.example.backend.entities.Project;
import com.example.backend.repositories.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectsDetailService {

    private final ProjectRepository projectRepository;

    @Transactional
    public ProjectsDetailDTO createProject(ProjectsDetailDTO projectDTO) {
        Project project = new Project();
        mapDtoToEntity(projectDTO, project);
        Project savedProject = projectRepository.save(project);
        return new ProjectsDetailDTO(savedProject);
    }

    public List<ProjectsDetailDTO> getAllProjects() {
        return projectRepository.findAll().stream()
                .map(ProjectsDetailDTO::new)
                .collect(Collectors.toList());
    }

    public ProjectsDetailDTO getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        return new ProjectsDetailDTO(project);
    }

    @Transactional
    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new RuntimeException("Project not found with id: " + id);
        }
        projectRepository.deleteById(id);
    }

    private void mapDtoToEntity(ProjectsDetailDTO dto, Project entity) {
        entity.setTitle(dto.getTitle());
        entity.setThumbnail(dto.getThumbnail());
        entity.setDescription(dto.getDescription());
        entity.setImg_urls(String.join(",", dto.getImg_urls()));
        entity.setLogo(dto.getLogo());
        entity.setLink_to_website(dto.getLink_to_website());
    }
}