package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
