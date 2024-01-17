package com.example.arabictransliteratorapi;
import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    @GetMapping("/")
    public String index() {
        return "Hello world";
    }
    
}
