package com.example.backend.repositories;

import com.example.backend.entities.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends JpaRepository<Jobs, Long> {
    List<Jobs> findTop3ByOrderByIdDesc();
}