package com.example.backend.services;

import com.example.backend.entities.Request;
import com.example.backend.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestService {

    private final RequestRepository requestRepository;

    @Autowired
    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public Request saveRequest(Request request) {
        return requestRepository.save(request);
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Optional<Request> getRequestById(Long id) {
        return requestRepository.findById(id);
    }

    public void deleteRequest(Long id) {
        requestRepository.deleteById(id);
    }

    public List<Request> getRequestsByCompanyName(String companyName) {
        return requestRepository.findByCompanyName(companyName);
    }

    public List<Request> getRequestsByService(Long serviceId) {
        return requestRepository.findByServicesId(serviceId);
    }
}
