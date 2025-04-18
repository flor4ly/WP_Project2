package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobsDTO {
    private int id; // Matches the primary key from the Jobs entity
    private String title;
    private String time;
    private String money;
    private String stack;
    private String reqs;
    private String skills;
    private String conditions;

    public JobsDTO() {}

    public JobsDTO(int id, String title, String time, String money, String stack,
                   String reqs, String skills, String conditions) {
        this.id = id;
        this.title = title;
        this.time = time;
        this.money = money;
        this.stack = stack;
        this.reqs = reqs;
        this.skills = skills;
        this.conditions = conditions;
    }
}
