package com.example.backend.dto;

import com.example.backend.entities.Project;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectsDetailDTO {

    private Long id;
    private String title;
    private String thumbnail;
    private String description;
    private List<String> img_urls;
    private String logo;
    private String link_to_website;

    public ProjectsDetailDTO(Project project) {
        this.id = project.getId();
        this.title = project.getTitle();
        this.thumbnail = project.getThumbnail();
        this.description = project.getDescription();
        this.img_urls = project.getImageUrlList();
        this.logo = project.getLogo();
        this.link_to_website = project.getLink_to_website();
    }
}
