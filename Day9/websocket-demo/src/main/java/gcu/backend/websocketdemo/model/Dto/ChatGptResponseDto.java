package gcu.backend.websocketdemo.model.Dto;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor
public class ChatGptResponseDto implements Serializable {

    private String id;
    private String object;
    private LocalDate created;
    private String model;

    //private List<Choice> choices;
    private Choice choice;

    @Builder
    public ChatGptResponseDto(String id, String object,
                              LocalDate created, String model,
                              Choice choice) {
        this.id = id;
        this.object = object;
        this.created = created;
        this.model = model;
        this.choice = choice;
    }
}