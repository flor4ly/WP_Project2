package com.example.backend.controllers;

import com.example.backend.dto.AboutUsDTO;
import com.example.backend.services.AboutUsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/about-us")
@RequiredArgsConstructor
public class AboutUsController {

    private final AboutUsService aboutUsService;

    @GetMapping("/{id}")
    public ResponseEntity<AboutUsDTO> getAboutUsData(@PathVariable Long id) {
        AboutUsDTO aboutUsDTO = aboutUsService.getAboutUsById(id);
        return ResponseEntity.ok(aboutUsDTO);
    }

    @GetMapping
    public ResponseEntity<List<AboutUsDTO>> getAllAboutUsData() {
        List<AboutUsDTO> aboutUsData = aboutUsService.getAllAboutUs();
        return ResponseEntity.ok(aboutUsData);
    }

    @PostMapping
    public ResponseEntity<AboutUsDTO> createAboutUsData(@RequestBody AboutUsDTO aboutUsDTO) {
        AboutUsDTO createdAboutUs = aboutUsService.createAboutUs(aboutUsDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAboutUs);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAboutUsData(@PathVariable Long id) {
        aboutUsService.deleteAboutUs(id);
        return ResponseEntity.noContent().build();
    }
}