package com.example.backend.controllers;

import com.example.backend.dto.AboutUsDTO;
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
public class AboutUsController {

}
