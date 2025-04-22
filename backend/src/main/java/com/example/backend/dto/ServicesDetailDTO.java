package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServicesDetailDTO {
    private List<ServicesDTO> featuredServices;
    private List<HomeProjectsDTO> featuredProjects;

}
