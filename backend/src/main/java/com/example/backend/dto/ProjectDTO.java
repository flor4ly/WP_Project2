package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class ProjectDTO {
    private Long id;
    private String title;
    private String thumbnail;
    private String description;
    private String imgUrls;
    private String logo;
    private String linkToWebsite;
    private Set<Long> serviceIds;

    public ProjectDTO() {}

    public ProjectDTO(Long id, String title, String thumbnail, String description,
                      String imgUrls, String logo, String linkToWebsite, Set<Long> serviceIds) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.imgUrls = imgUrls;
        this.logo = logo;
        this.linkToWebsite = linkToWebsite;
        this.serviceIds = serviceIds;
    }
}
