package com.example.backend.controllers;

import com.example.backend.dto.ApiResponse;
import com.example.backend.services.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/jobs")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    @Autowired
    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @PostMapping("/apply")
    public ResponseEntity<ApiResponse> apply(
            @RequestParam("name") String name,
            @RequestParam("phone") String phone,
            @RequestParam("resume") MultipartFile resume,
            @RequestParam("jobId") Long jobId
    ) {
        try {
            jobApplicationService.applyForJob(name, phone, resume, jobId);
            return ResponseEntity.ok(new ApiResponse("Application submitted successfully", true));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Resume upload failed: " + e.getMessage(), false));
        }
    }
}
