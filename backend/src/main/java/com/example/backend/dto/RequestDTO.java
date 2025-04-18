package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestDTO {
    private Long id;
    private String companyName;
    private Long serviceId;
    private String details;

    public RequestDTO() {}

    public RequestDTO(Long id, String companyName, Long serviceId, String details) {
        this.id = id;
        this.companyName = companyName;
        this.serviceId = serviceId;
        this.details = details;
    }
}
