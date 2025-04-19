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
    public void createRequest(RequestDTO dto) {
        Services service = serviceRepo.findById(dto.getServiceId())
                .orElseThrow(() -> new RuntimeException("Service not found"));

        Request request = new Request();
        request.setCompanyName(dto.getCompanyName());
        request.setName(dto.getName());
        request.setNumber(dto.getNumber());
        request.setDescription(dto.getDescription());
        request.setServices(service);

        requestRepo.save(request);
    }
}
