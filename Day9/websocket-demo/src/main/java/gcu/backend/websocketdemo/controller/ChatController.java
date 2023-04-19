package gcu.backend.websocketdemo.controller;

import gcu.backend.websocketdemo.model.ChatGptService;
import gcu.backend.websocketdemo.model.Dto.ChatMessage;
import gcu.backend.websocketdemo.model.Dto.ChatGptResponseDto;
import gcu.backend.websocketdemo.model.Dto.QuestionRequestDto;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static gcu.backend.websocketdemo.model.Dto.ChatMessage.MessageType.CHAT;

@RestController
public class ChatController {
    private final ChatGptService chatGptService;

    public ChatController(ChatGptService chatGptService) {
        this.chatGptService = chatGptService;
    }

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat-gpt/question")
    @SendTo("/topic/public")
    public ChatMessage sendQuestion(@RequestBody QuestionRequestDto requestDto) {
        ChatGptResponseDto responseFromGpt = chatGptService.askQuestion(requestDto);

        List<String> answer = responseFromGpt.getChoices()
                .stream().map(choice -> choice.getText()).collect(Collectors.toList());

        ChatMessage chatFromGpt = new ChatMessage();
        chatFromGpt.setContent(answer.toString());
        chatFromGpt.setSender("ChatGpt");
        chatFromGpt.setType(CHAT);

        return chatFromGpt;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
// Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }
}