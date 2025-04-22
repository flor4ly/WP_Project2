package com.example.backend.controllers;

import com.example.backend.dto.ServicesDTO;
import com.example.backend.services.ServicesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor
public class ServicesController {

    private final ServicesService servicesService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicesDTO createService(@RequestBody ServicesDTO servicesDTO) {
        return servicesService.createService(servicesDTO);
    }

    @GetMapping
    public List<ServicesDTO> getAllServices() {
        return servicesService.getAllServices();
    }

    @GetMapping("/{id}")
    public ServicesDTO getServiceById(@PathVariable Long id) {
        return servicesService.getServiceById(id);
    }



    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteService(@PathVariable Long id) {
        servicesService.deleteService(id);
    }
}