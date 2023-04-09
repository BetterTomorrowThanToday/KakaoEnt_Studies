package com.example.gcurest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CarRest {
    @PostMapping("/api/postCar")
    public Car user(){
        System.out.println("UserApiController start...");
        Car user = new Car(1, "Grandeur", "Hyundai", 6000);
        return user;
    }

    @GetMapping("/api/getCar")
    public Car get(){
        System.out.println("UserApiController start...");
        Car user = new Car(2, "Spider", "Ferrari", 30000);

        return user;
    }
}
