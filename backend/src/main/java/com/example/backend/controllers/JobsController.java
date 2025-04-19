package com.example.backend.controllers;

import com.example.backend.dto.JobsDTO;
import com.example.backend.entities.Jobs;
import com.example.backend.services.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
public class JobsController {

    @Autowired
    private JobsService jobsService;

    // Get all jobs
    @GetMapping
    public ResponseEntity<List<JobsDTO>> getAllJobs() {
        List<Jobs> jobs = jobsService.getAllJobs();
        List<JobsDTO> jobsDTOList = jobs.stream()
                .map(job -> new JobsDTO(
                        job.getId(),
                        job.getTitle(),
                        job.getTime(),
                        job.getMoney(),
                        job.getStack(),
                        job.getReqs(),
                        job.getSkills(),
                        job.getConditions()))
                .toList();
        return new ResponseEntity<>(jobsDTOList, HttpStatus.OK);
    }

    // Get job by ID
    @GetMapping("/{id}")
    public ResponseEntity<JobsDTO> getJobById(@PathVariable("id") int id) {
        Optional<Jobs> jobOptional = jobsService.getJobById(id);
        if (jobOptional.isPresent()) {
            Jobs job = jobOptional.get();
            JobsDTO jobDTO = new JobsDTO(
                    job.getId(),
                    job.getTitle(),
                    job.getTime(),
                    job.getMoney(),
                    job.getStack(),
                    job.getReqs(),
                    job.getSkills(),
                    job.getConditions());
            return new ResponseEntity<>(jobDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new job
    @PostMapping
    public ResponseEntity<JobsDTO> createJob(@RequestBody JobsDTO jobsDTO) {
        Jobs job = new Jobs(
                0, // ID will be auto-generated
                jobsDTO.getTitle(),
                jobsDTO.getTime(),
                jobsDTO.getMoney(),
                jobsDTO.getStack(),
                jobsDTO.getReqs(),
                jobsDTO.getSkills(),
                jobsDTO.getConditions(),
                null); // No job applications initially

        Jobs createdJob = jobsService.createJob(job);

        JobsDTO createdJobDTO = new JobsDTO(
                createdJob.getId(),
                createdJob.getTitle(),
                createdJob.getTime(),
                createdJob.getMoney(),
                createdJob.getStack(),
                createdJob.getReqs(),
                createdJob.getSkills(),
                createdJob.getConditions());

        return new ResponseEntity<>(createdJobDTO, HttpStatus.CREATED);
    }

    // Update job
    @PutMapping("/{id}")
    public ResponseEntity<JobsDTO> updateJob(@PathVariable("id") int id, @RequestBody JobsDTO jobsDTO) {
        Jobs updatedJob = new Jobs(
                id,
                jobsDTO.getTitle(),
                jobsDTO.getTime(),
                jobsDTO.getMoney(),
                jobsDTO.getStack(),
                jobsDTO.getReqs(),
                jobsDTO.getSkills(),
                jobsDTO.getConditions(),
                null); // No job applications in the DTO

        Jobs updated = jobsService.updateJob(id, updatedJob);
        if (updated != null) {
            JobsDTO updatedJobDTO = new JobsDTO(
                    updated.getId(),
                    updated.getTitle(),
                    updated.getTime(),
                    updated.getMoney(),
                    updated.getStack(),
                    updated.getReqs(),
                    updated.getSkills(),
                    updated.getConditions());
            return new ResponseEntity<>(updatedJobDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete job
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable("id") int id) {
        boolean isDeleted = jobsService.deleteJob(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
