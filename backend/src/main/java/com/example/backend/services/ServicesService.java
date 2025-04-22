package com.example.backend.services;

import com.example.backend.dto.ServicesDTO;
import com.example.backend.entities.Services;
import com.example.backend.repositories.ServicesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServicesService {

    private final ServicesRepository servicesRepository;

    @Transactional
    public ServicesDTO createService(ServicesDTO servicesDTO) {
        Services service = new Services();
        service.setTitle(servicesDTO.getTitle());
        service.setDescription(servicesDTO.getDescription());

        Services savedService = servicesRepository.save(service);
        return mapToDTO(savedService);
    }

    public List<ServicesDTO> getAllServices() {
        return servicesRepository.findAll().stream()
                .map(this::mapToDTO)
                .toList();
    }

    public ServicesDTO getServiceById(Long id) {
        Services service = servicesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + id));
        return mapToDTO(service);
    }


    @Transactional
    public void deleteService(Long id) {
        if (!servicesRepository.existsById(id)) {
            throw new RuntimeException("Service not found with id: " + id);
        }
        servicesRepository.deleteById(id);
    }


    private ServicesDTO mapToDTO(Services service) {
        return new ServicesDTO(
                service.getId(),
                service.getTitle(),
                service.getDescription()
        );
    }
}