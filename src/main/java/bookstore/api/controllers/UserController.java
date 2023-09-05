package bookstore.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import bookstore.api.domain.user.User;
import bookstore.api.domain.user.UserDTO;
import bookstore.api.services.UserServices;

@RestController()
@RestMapping("/users")
public class UserController {

    @Autowired
    private UserServices userServices;
    
    @PostMapping()
    public ResponseEntity<User> saveUser(@RequestBody UserDTO user){
        User newUser = userServices.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<User>> findAllUsers(){
        List<User> users = userServices.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
