package bookstore.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import bookstore.api.domain.user.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
