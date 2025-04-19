package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectsDetailDTO {

    private Long id;
    private String title;
    private String thumbnail;
    private String description;
    private String img_urls;
    private String logo;
    private String link_to_website;

}
