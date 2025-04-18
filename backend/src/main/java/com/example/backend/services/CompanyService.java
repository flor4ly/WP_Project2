package com.example.backend.services;

import com.example.backend.dto.CompanyDTO;
import com.example.backend.entities.Company;
import com.example.backend.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> getCompanyById(Long id) {
        return companyRepository.findById(id);
    }

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(Long id, Company updatedCompany) {
        return companyRepository.findById(id)
                .map(company -> {
                    company.setTitle(updatedCompany.getTitle());
                    company.setDescription(updatedCompany.getDescription());
                    company.setImg_urls(updatedCompany.getImg_urls());
                    company.setNum_projects(updatedCompany.getNum_projects());
                    company.setNum_members(updatedCompany.getNum_members());
                    company.setNum_reviews(updatedCompany.getNum_reviews());
                    company.setNum_awards(updatedCompany.getNum_awards());
                    company.setOur_vision(updatedCompany.getOur_vision());
                    company.setOur_mission(updatedCompany.getOur_mission());
                    return companyRepository.save(company);
                })
                .orElse(null);
    }

    public boolean deleteCompany(Long id) {
        if (companyRepository.existsById(id)) {
            companyRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // ✅ Mapping methods:
    public CompanyDTO mapToDTO(Company company) {
        return new CompanyDTO(
                company.getId(),
                company.getTitle(),
                company.getDescription(),
                company.getImg_urls(),
                company.getNum_projects(),
                company.getNum_members(),
                company.getNum_reviews(),
                company.getNum_awards(),
                company.getOur_vision(),
                company.getOur_mission()
        );
    }

    public Company mapToEntity(CompanyDTO dto) {
        Company company = new Company();
        company.setId(dto.getId());
        company.setTitle(dto.getTitle());
        company.setDescription(dto.getDescription());
        company.setImg_urls(dto.getImg_urls());
        company.setNum_projects(dto.getNum_projects());
        company.setNum_members(dto.getNum_members());
        company.setNum_reviews(dto.getNum_reviews());
        company.setNum_awards(dto.getNum_awards());
        company.setOur_vision(dto.getOur_vision());
        company.setOur_mission(dto.getOur_mission());
        return company;
    }
}