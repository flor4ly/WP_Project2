package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String thumbnail;
    private String description;
    private String img_urls;
    private String logo;
    private String link_to_website;

    @ManyToMany
    @JoinTable(
            name = "project_services",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id")
    )
    private Set<Services> services = new HashSet<>();

    public void addService(Services service) {
        this.services.add(service);
        service.getProjects().add(this);
    }

    public void removeService(Services service) {
        this.services.remove(service);
        service.getProjects().remove(this);
    }

}
