package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobApplicationDTO {
    private String applicantName;
    private String applicantPhone;
    private Long jobId;
}
