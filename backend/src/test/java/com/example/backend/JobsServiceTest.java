package com.example.backend;

import com.example.backend.entities.Jobs;
import com.example.backend.repositories.JobsRepository;
import com.example.backend.services.JobsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class JobsServiceTest {

    @Autowired
    private JobsService jobsService;

    @Autowired
    private JobsRepository jobsRepository;

    @BeforeEach
    void setup() {
        jobsRepository.deleteAll(); // Clean DB before each test
    }

    @Test
    public void testCreateJob() {
        Jobs job = new Jobs();
        job.setTitle("Backend Developer");
        job.setTime("Full-time");
        job.setMoney("$5000");
        job.setStack("Java, Spring Boot");
        job.setReqs("2+ years experience");
        job.setSkills("Java, SQL, REST");
        job.setConditions("Remote");

        Jobs saved = jobsService.createJob(job);
        assertNotNull(saved.getId());
        assertEquals("Backend Developer", saved.getTitle());
    }

    @Test
    public void testGetAllJobs() {
        Jobs job1 = new Jobs(0, "Job A", "Full-time", "$3000", "Stack A", "Req A", "Skill A", "Cond A");
        Jobs job2 = new Jobs(0, "Job B", "Part-time", "$2000", "Stack B", "Req B", "Skill B", "Cond B");

        jobsService.createJob(job1);
        jobsService.createJob(job2);

        List<Jobs> allJobs = jobsService.getAllJobs();
        assertEquals(2, allJobs.size());
    }

    @Test
    public void testGetJobById() {
        Jobs job = new Jobs(0, "QA Engineer", "Full-time", "$4000", "Selenium", "Reqs", "Skills", "Cond");
        Jobs saved = jobsService.createJob(job);

        Optional<Jobs> fetched = jobsService.getJobById(saved.getId());
        assertTrue(fetched.isPresent());
        assertEquals("QA Engineer", fetched.get().getTitle());
    }

    @Test
    public void testDeleteJob() {
        Jobs job = new Jobs(0, "DevOps", "Contract", "$4500", "AWS", "Reqs", "Skills", "Cond");
        Jobs saved = jobsService.createJob(job);

        jobsService.deleteJob(saved.getId());

        Optional<Jobs> deleted = jobsService.getJobById(saved.getId());
        assertFalse(deleted.isPresent());
    }
}
