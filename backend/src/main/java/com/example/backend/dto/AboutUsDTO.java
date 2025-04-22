
package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AboutUsDTO {
    private Long id;
    private String title;
    private String description;
    private String img_urls;
    private int num_projects;
    private int num_members;
    private int num_reviews;
    private int num_awards;
    private String our_vision;
    private String our_mission;
}
