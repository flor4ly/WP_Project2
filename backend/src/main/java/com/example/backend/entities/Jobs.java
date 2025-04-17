package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String time;
    private String money;
    private String stack;
    private String reqs;
    private String skills;
    private String conditions;

    @OneToMany(mappedBy = "jobs")
    private List<JobApplication> jobApplications;
}
