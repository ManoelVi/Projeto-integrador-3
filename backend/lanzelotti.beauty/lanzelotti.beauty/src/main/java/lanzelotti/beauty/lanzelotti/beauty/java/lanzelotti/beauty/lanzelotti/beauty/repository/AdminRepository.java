package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.AdminUser;

@Repository
public interface AdminRepository extends JpaRepository<AdminUser, Long>{
    AdminUser findByUserNameAndPassword(String userName, int password);
}
