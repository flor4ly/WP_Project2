package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobApplicationDTO {
    private Long id; // Primary key
    private String applicantName;
    private String applicantPhone;
    private String resumePath;
    private Long jobId;
    public JobApplicationDTO() {}

    public JobApplicationDTO(Long id, String applicantName, String applicantPhone,
                             String resumePath, Long jobId) {
        this.id = id;
        this.applicantName = applicantName;
        this.applicantPhone = applicantPhone;
        this.resumePath = resumePath;
        this.jobId = jobId;
    }
}
