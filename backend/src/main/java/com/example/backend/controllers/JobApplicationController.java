package com.example.backend.controllers;

import com.example.backend.dto.JobApplicationDTO;
import com.example.backend.entities.JobApplication;
import com.example.backend.services.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/apply")
    public ResponseEntity<JobApplicationDTO> applyForJob(
            @RequestParam("name") String name,
            @RequestParam("phone") String phone,
            @RequestParam("resume") MultipartFile resume,
            @RequestParam("jobId") Long jobId
    ) throws IOException {
        JobApplication application = jobApplicationService.applyForJob(name, phone, resume, jobId);
        JobApplicationDTO response = mapToDTO(application);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<JobApplicationDTO>> getAllApplications() {
        List<JobApplication> applications = jobApplicationService.getAllApplications();
        List<JobApplicationDTO> dtos = applications.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    private JobApplicationDTO mapToDTO(JobApplication application) {
        return new JobApplicationDTO(
                application.getId(),
                application.getApplicantName(),
                application.getApplicantPhone(),
                application.getResumePath(),
                application.getJobs().getId() != 0 ? (long) application.getJobs().getId() : null
        );
    }
}
