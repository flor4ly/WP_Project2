package com.example.backend.repositories;


import com.example.backend.entities.Request;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Long> {
    List<Request> findByCompanyName(String companyName);
    List<Request> findByServicesId(Long services);
}
