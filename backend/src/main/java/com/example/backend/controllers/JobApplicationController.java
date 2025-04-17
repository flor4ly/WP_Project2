package com.example.backend.controllers;

import com.example.backend.entities.JobApplication;
import com.example.backend.services.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/job-applications")
@CrossOrigin(origins = "*")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping
    public ResponseEntity<?> applyForJob(
            @RequestParam("name") String name,
            @RequestParam("phone") String phone,
            @RequestParam("resume") MultipartFile resume,
            @RequestParam("jobId") Long jobId
    ) {
        try {
            JobApplication application = jobApplicationService.applyForJob(name, phone, resume, jobId);
            return ResponseEntity.ok(application);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to save resume: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<JobApplication>> getAllApplications() {
        return ResponseEntity.ok().body(jobApplicationService.getAllApplications());
    }
}
