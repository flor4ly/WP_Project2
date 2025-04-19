package com.example.backend.repositories;

import com.example.backend.entities.Services;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepository extends JpaRepository<Services, Long> {}