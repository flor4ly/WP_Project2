package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
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

    @ManyToOne
    private Services services;

    public List<String> getImageUrlList() {
        return Arrays.asList(this.img_urls.split(","));
    }
}
