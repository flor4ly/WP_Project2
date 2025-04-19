package com.example.backend.controllers;

import com.example.backend.dto.CompanyDTO;
import com.example.backend.entities.Company;
import com.example.backend.services.CompanyService;
import com.example.backend.dto.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "*")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public ResponseEntity<List<CompanyDTO>> getAllCompanies() {
        List<CompanyDTO> companies = companyService.getAllCompanies()
                .stream()
                .map(companyService::mapToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(companies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompanyDTO> getCompanyById(@PathVariable Long id) {
        Optional<Company> companyOpt = companyService.getCompanyById(id);
        return companyOpt.map(company -> ResponseEntity.ok(companyService.mapToDTO(company)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CompanyDTO> createCompany(@RequestBody CompanyDTO companyDTO) {
        Company created = companyService.createCompany(companyService.mapToEntity(companyDTO));
        return ResponseEntity.ok(companyService.mapToDTO(created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CompanyDTO> updateCompany(@PathVariable Long id, @RequestBody CompanyDTO companyDTO) {
        Company updated = companyService.updateCompany(id, companyService.mapToEntity(companyDTO));
        if (updated != null) {
            return ResponseEntity.ok(companyService.mapToDTO(updated));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteCompany(@PathVariable Long id) {
        boolean deleted = companyService.deleteCompany(id);
        if (deleted) {
            return ResponseEntity.ok(new ApiResponse("Company deleted successfully", true));
        } else {
            return ResponseEntity.status(404).body(new ApiResponse("Company not found", false));
        }
    }
}
