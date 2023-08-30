package bookstore.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LabController {

    @GetMapping("/lab/hello")
    public String hello(){
        return "Hello, Elliot";
    }
    
}
