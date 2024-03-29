package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.AdminUser;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository.AdminRepository;

@RestController
@RequestMapping("admin/")
public class AdminController {
    @Autowired
    AdminRepository adminRepository;

    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminUser createRequest(@RequestBody AdminUser user){
        AdminUser existingUser = adminRepository.findByUserName(user.getUserName());
        if(existingUser != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário já existe");
        }
    return adminRepository.save(user);
    }

    @GetMapping("/login")
    public ResponseEntity<Boolean> login(@RequestParam String userName, @RequestParam String password) {
        AdminUser adminUser = adminRepository.findByUserNameAndPassword(userName, password);
        if (adminUser != null) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }
    }

    @GetMapping("/allUsers")
    public List<AdminUser> login() {
        return adminRepository.findAll();
    }

    @DeleteMapping("/deleteUser/{userName}")
    public ResponseEntity<AdminUser> delete(@PathVariable String userName) {
        AdminUser existingUser = adminRepository.findByUserName(userName);

        if(existingUser == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não existe");
        }

        adminRepository.deleteById(existingUser.getId());

        return ResponseEntity.ok(existingUser);
    }
}
