package com.example.backend.repositories;

import com.example.backend.entities.Project;
import com.example.backend.entities.Services;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Services, Long> {
    List<Services> findByById(Long id);

}