package bookstore.api.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bookstore.api.domain.user.User;
import bookstore.api.domain.user.UserDTO;
import bookstore.api.repositories.UserRepository;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user){
        this.userRepository.save(user);
    }

    public User createUser(UserDTO data){
        User newUser = new User(data);
        this.saveUser(newUser);
        return newUser;
    }


    public List<User> findAllUsers(){
        return this.userRepository.findAll();
    }
    
}
