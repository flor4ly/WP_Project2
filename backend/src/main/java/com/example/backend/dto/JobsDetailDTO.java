package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobsDetailDTO {
    private Long id;
    private String title;
    private String reqs;
    private String skills;
    private String conditions;
}
