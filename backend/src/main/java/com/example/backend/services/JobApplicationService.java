package com.example.backend.services;

import com.example.backend.repositories.JobsRepository;
import com.example.backend.entities.JobApplication;
import com.example.backend.entities.Jobs;
import com.example.backend.repositories.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Autowired
    private JobsRepository jobsRepository;

    public JobApplication applyForJob(String name, String phone, MultipartFile resume, Long jobId) throws IOException {
        String uploadDir = "resumes/";
        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String fileName = UUID.randomUUID() + "_" + resume.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(resume.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        JobApplication application = new JobApplication();
        application.setApplicantName(name);
        application.setApplicantPhone(phone);
        application.setResumePath(filePath.toString());

        Jobs job = jobsRepository.findById(jobId.intValue())
                .orElseThrow(() -> new RuntimeException("Job not found with id: " + jobId));
        application.setJobs(job);

        return jobApplicationRepository.save(application);
    }
}
