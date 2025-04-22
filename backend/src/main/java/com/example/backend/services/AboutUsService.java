package com.example.backend.services;

import com.example.backend.dto.AboutUsDTO;
import com.example.backend.entities.AboutUs;
import com.example.backend.repositories.AboutUsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AboutUsService {

    private final AboutUsRepository aboutUsRepository;

    public AboutUsDTO getAboutUsById(Long id) {
        AboutUs aboutUs = aboutUsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("AboutUs not found with id: " + id));
        return mapToDto(aboutUs);
    }

    public List<AboutUsDTO> getAllAboutUs() {
        return aboutUsRepository.findAll().stream()
                .map(this::mapToDto)
                .toList();
    }

    public AboutUsDTO createAboutUs(AboutUsDTO aboutUsDto) {
        AboutUs aboutUs = mapToEntity(aboutUsDto);
        AboutUs savedAboutUs = aboutUsRepository.save(aboutUs);
        return mapToDto(savedAboutUs);
    }

    public void deleteAboutUs(Long id) {
        if (!aboutUsRepository.existsById(id)) {
            throw new RuntimeException("AboutUs not found with id: " + id);
        }
        aboutUsRepository.deleteById(id);
    }

    private AboutUsDTO mapToDto(AboutUs aboutUs) {
        return new AboutUsDTO(
                aboutUs.getId(),
                aboutUs.getTitle(),
                aboutUs.getDescription(),
                aboutUs.getImg_urls(),
                aboutUs.getNum_projects(),
                aboutUs.getNum_members(),
                aboutUs.getNum_reviews(),
                aboutUs.getNum_awards(),
                aboutUs.getOur_vision(),
                aboutUs.getOur_mission()
        );
    }

    private AboutUs mapToEntity(AboutUsDTO dto) {
        AboutUs aboutUs = new AboutUs();
        aboutUs.setTitle(dto.getTitle());
        aboutUs.setDescription(dto.getDescription());
        aboutUs.setImg_urls(dto.getImg_urls());
        aboutUs.setNum_projects(dto.getNum_projects());
        aboutUs.setNum_members(dto.getNum_members());
        aboutUs.setNum_reviews(dto.getNum_reviews());
        aboutUs.setNum_awards(dto.getNum_awards());
        aboutUs.setOur_vision(dto.getOur_vision());
        aboutUs.setOur_mission(dto.getOur_mission());
        return aboutUs;
    }
}