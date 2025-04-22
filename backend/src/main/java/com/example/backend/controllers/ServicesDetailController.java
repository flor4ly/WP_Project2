package com.example.backend.controllers;

import com.example.backend.dto.ServicesDetailDTO;
import com.example.backend.services.ServicesDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services-detail")
@RequiredArgsConstructor
public class ServicesDetailController {

    private final ServicesDetailService servicesDetailService;

    @GetMapping
    public ServicesDetailDTO getServicesDetail(
            @RequestParam List<Long> serviceIds,
            @RequestParam List<Long> projectIds) {
        return servicesDetailService.getServicesDetailByIds(serviceIds, projectIds);
    }

}