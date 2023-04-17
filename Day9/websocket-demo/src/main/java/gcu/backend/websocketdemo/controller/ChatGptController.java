package gcu.backend.websocketdemo.controller;

import gcu.backend.websocketdemo.model.ChatGptService;
import gcu.backend.websocketdemo.model.ChatMessage;
import gcu.backend.websocketdemo.model.Dto.ChatGptResponseDto;
import gcu.backend.websocketdemo.model.Dto.Choice;
import gcu.backend.websocketdemo.model.Dto.QuestionRequestDto;
import jakarta.annotation.Nullable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static gcu.backend.websocketdemo.model.ChatMessage.MessageType.CHAT;

@RestController
@RequestMapping("/chat-gpt")
public class ChatGptController {

    private final ChatGptService chatGptService;

    public ChatGptController(ChatGptService chatGptService) {
        this.chatGptService = chatGptService;
    }

    @PostMapping("/question")
    public ChatGptResponseDto sendQuestion(@RequestBody QuestionRequestDto requestDto) {
        ChatGptResponseDto responseFromGpt = chatGptService.askQuestion(requestDto);

        return responseFromGpt;
    }

}
