package com.example.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestDTO {
        @NotBlank(message = "Company name is required")
        @Size(max = 100, message = "Company name must not exceed 100 characters")
        private String companyName;

        @NotBlank(message = "Name is required")
        @Size(max = 50, message = "Name must not exceed 50 characters")
        private String name;

        @NotBlank(message = "Number is required")
        @Size(max = 15, message = "Number must not exceed 15 characters")
        @Pattern(regexp = "^[0-9]+$", message = "Number must contain only digits")
        private String number;

        @Size(max = 255, message = "Description must not exceed 255 characters")
        private String description;
}
