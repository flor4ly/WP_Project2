package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServicesDTO {
    private Long id;
    private String title;
    private String description;

    public ServicesDTO() {}

    public ServicesDTO(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
