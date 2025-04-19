package com.example.backend.services;

import com.example.backend.dto.JobsDTO;
import com.example.backend.dto.JobsDetailDTO;
import com.example.backend.entities.Jobs;
import com.example.backend.repositories.JobsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsService {
    private final JobsRepository jobsRepository;

    public JobsService(JobsRepository jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    public List<JobsDTO> getAllJobsForListing() {
        return jobsRepository.findAll().stream()
                .map(this::convertToJobsDTO)
                .toList();
    }

    public List<JobsDetailDTO> getAllJobsForDetail() {
        return jobsRepository.findAll().stream()
                .map(this::convertToJobsDetailDTO)
                .toList();
    }

    public JobsDetailDTO getJobDetailById(Long id) {
        return jobsRepository.findById(id)
                .map(this::convertToJobsDetailDTO)
                .orElseThrow(() -> new RuntimeException("Job not found with id: " + id));
    }

    public JobsDTO createJobListing(JobsDTO jobsDTO) {
        Jobs job = new Jobs();
        job.setTitle(jobsDTO.getTitle());
        job.setTime(jobsDTO.getTime());
        job.setMoney(jobsDTO.getMoney());
        job.setStack(jobsDTO.getStack());

        Jobs savedJob = jobsRepository.save(job);
        return convertToJobsDTO(savedJob);
    }

    public JobsDetailDTO createJobDetail(JobsDetailDTO jobsDetailDTO) {
        Jobs job = new Jobs();
        job.setTitle(jobsDetailDTO.getTitle());
        job.setReqs(jobsDetailDTO.getReqs());
        job.setSkills(jobsDetailDTO.getSkills());
        job.setConditions(jobsDetailDTO.getConditions());

        Jobs savedJob = jobsRepository.save(job);
        return convertToJobsDetailDTO(savedJob);
    }

    public void deleteJobListing(Long id) {
        if (!jobsRepository.existsById(id)) {
            throw new RuntimeException("Job not found with id: " + id);
        }
        jobsRepository.deleteById(id);
    }

    public void deleteJobDetail(Long id) {
        if (!jobsRepository.existsById(id)) {
            throw new RuntimeException("Job not found with id: " + id);
        }
        jobsRepository.deleteById(id);
    }

    private JobsDTO convertToJobsDTO(Jobs job) {
        return new JobsDTO(
                job.getId(),
                job.getTitle(),
                job.getTime(),
                job.getMoney(),
                job.getStack()
        );
    }

    private JobsDetailDTO convertToJobsDetailDTO(Jobs job) {
        return new JobsDetailDTO(
                job.getId(),
                job.getTitle(),
                job.getReqs(),
                job.getSkills(),
                job.getConditions()
        );
    }
}