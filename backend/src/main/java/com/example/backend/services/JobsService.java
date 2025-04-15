package com.example.backend.services;

import com.example.backend.entities.Jobs;
import com.example.backend.repositories.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobsService {

    @Autowired
    private JobsRepository jobsRepository;

    public List<Jobs> getAllJobs() {
        return jobsRepository.findAll();
    }

    public Optional<Jobs> getJobById(int id) {
        return jobsRepository.findById(id);
    }

    public Jobs createJob(Jobs job) {
        return jobsRepository.save(job);
    }

    public Jobs updateJob(int id, Jobs updatedJob) {
        return jobsRepository.findById(id)
                .map(job -> {
                    job.setTitle(updatedJob.getTitle());
                    job.setTime(updatedJob.getTime());
                    job.setMoney(updatedJob.getMoney());
                    job.setStack(updatedJob.getStack());
                    job.setReqs(updatedJob.getReqs());
                    job.setSkills(updatedJob.getSkills());
                    job.setConditions(updatedJob.getConditions());
                    return jobsRepository.save(job);
                })
                .orElse(null);
    }

    public boolean deleteJob(int id) {
        if (jobsRepository.existsById(id)) {
            jobsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
