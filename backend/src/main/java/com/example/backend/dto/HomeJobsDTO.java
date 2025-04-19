package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HomeJobsDTO {
    private Long id;
    private String title;

    public HomeJobsDTO() {}

    public HomeJobsDTO(Long id, String title) {
        this.id = id;
        this.title = title;
    }
}
