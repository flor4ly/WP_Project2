package com.example.backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDTO {
        private String companyName;
        private String name;
        private String number;
        private String description;
        private Long serviceId;
}
