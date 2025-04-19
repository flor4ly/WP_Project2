package com.example.backend.services;


import com.example.backend.dto.RequestDTO;
import com.example.backend.entities.Request;
import com.example.backend.entities.Services;
import com.example.backend.repositories.RequestRepository;
import com.example.backend.repositories.ServicesRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RequestService {

    private final RequestRepository requestRepo;
    private final ServicesRepository serviceRepo;

    @Transactional
    public void createRequest(String companyName, String name, String number, String description, Long serviceId) {
        Services service = serviceRepo.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + serviceId));

        Request request = new Request();
        request.setCompanyName(companyName);
        request.setName(name);
        request.setNumber(number);
        request.setDescription(description);
        request.setServices(service);

        requestRepo.save(request);
    }
}

