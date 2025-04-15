package com.example.backend;

import com.example.backend.entities.Company;
import com.example.backend.services.CompanyService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class CompanyServiceTest {

    @Autowired
    private CompanyService companyService;

    @Test
    public void testCreateOrGetCompany() {
        Company company = new Company();
        company.setTitle("Test Company");
        company.setDescription("We build cool stuff.");

        Company saved = companyService.createCompany(company);
        assertEquals("Test Company", saved.getTitle());

        Company fetched = companyService.getCompanyById(1L).orElse(null);
        assertNotNull(fetched);
    }
}
