package com.example.backend.controllers;

import com.example.backend.dto.JobsDTO;
import com.example.backend.dto.JobsDetailDTO;
import com.example.backend.services.JobsService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobsController {
    private final JobsService jobsService;

    public JobsController(JobsService jobsService) {
        this.jobsService = jobsService;
    }

    @GetMapping("/listing")
    public List<JobsDTO> getAllJobListings() {
        return jobsService.getAllJobsForListing();
    }

    @PostMapping("/listing")
    @ResponseStatus(HttpStatus.CREATED)
    public JobsDTO createJobListing(@RequestBody JobsDTO jobsDTO) {
        return jobsService.createJobListing(jobsDTO);
    }

    @DeleteMapping("/listing/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteJobListing(@PathVariable Long id) {
        jobsService.deleteJobListing(id);
    }

    @GetMapping("/detail")
    public List<JobsDetailDTO> getAllJobDetails() {
        return jobsService.getAllJobsForDetail();
    }

    @GetMapping("/detail/{id}")
    public JobsDetailDTO getJobDetail(@PathVariable Long id) {
        return jobsService.getJobDetailById(id);
    }

    @PostMapping("/detail")
    @ResponseStatus(HttpStatus.CREATED)
    public JobsDetailDTO createJobDetail(@RequestBody JobsDetailDTO jobsDetailDTO) {
        return jobsService.createJobDetail(jobsDetailDTO);
    }

    @DeleteMapping("/detail/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteJobDetail(@PathVariable Long id) {
        jobsService.deleteJobDetail(id);
    }
}