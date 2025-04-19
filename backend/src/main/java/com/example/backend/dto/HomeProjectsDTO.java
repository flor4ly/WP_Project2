package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HomeProjectsDTO {
    private Long id;
    private String title;
    private String thumbnail;
    private String description;

    public HomeProjectsDTO() {}

    public HomeProjectsDTO(Long id, String title, String thumbnail, String description) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
    }
}
