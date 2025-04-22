package com.example.backend.controllers;

import com.example.backend.dto.HomeDTO;
import com.example.backend.services.HomePageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    private final HomePageService homePageService;

    public HomeController(HomePageService homePageService) {
        this.homePageService = homePageService;
    }

    @GetMapping
    public HomeDTO getHomepageData() {
        return homePageService.getHomepageData();
    }
}