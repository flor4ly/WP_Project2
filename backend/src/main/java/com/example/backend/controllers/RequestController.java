package com.example.backend.controllers;

import com.example.backend.dto.RequestDTO;
import com.example.backend.services.RequestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/service-requests")
@RequiredArgsConstructor
public class RequestController {
    private final RequestService requestService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void submitRequest(@RequestBody @Valid RequestDTO dto) {
        requestService.createRequest(dto);
    }
}