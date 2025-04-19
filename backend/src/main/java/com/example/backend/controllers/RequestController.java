package com.example.backend.controllers;

import com.example.backend.dto.ApiResponse;
import com.example.backend.dto.RequestDTO;
import com.example.backend.services.RequestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/service-requests")
@RequiredArgsConstructor
public class RequestController {

    private final RequestService requestService;

    @PostMapping("/submit")
    public ResponseEntity<ApiResponse> submitRequest(
            @RequestParam("companyName") String companyName,
            @RequestParam("name") String name,
            @RequestParam("number") String number,
            @RequestParam("description") String description,
            @RequestParam("serviceId") Long serviceId
    ) {
        try {
            requestService.createRequest(companyName, name, number, description, serviceId);
            return ResponseEntity.ok(new ApiResponse("Service request submitted successfully", true));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse("Failed to submit service request: " + e.getMessage(), false));
        }
    }
}
