package gcu.backend.websocketdemo.controller;

import gcu.backend.websocketdemo.model.ChatMessage;
import gcu.backend.websocketdemo.model.Dto.ChatGptResponseDto;
import gcu.backend.websocketdemo.model.Dto.Choice;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import static gcu.backend.websocketdemo.model.ChatMessage.MessageType.CHAT;

@Controller
public class ChatController {
    //original
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage gptMessage(@Payload ChatGptResponseDto responseFromGpt){
        ChatMessage chatFromGpt = new ChatMessage();
        Choice choice = responseFromGpt.getChoice();

        chatFromGpt.setContent(choice.getText());
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