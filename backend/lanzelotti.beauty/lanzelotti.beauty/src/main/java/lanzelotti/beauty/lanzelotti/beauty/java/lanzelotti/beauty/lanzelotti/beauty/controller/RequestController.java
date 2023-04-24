package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.Request;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.Service;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.Product;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository.ProductRepository;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository.RequestRepository;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository.ServiceRepository;

@RestController
@RequestMapping("api/")
public class RequestController {
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("request")
    @ResponseStatus(HttpStatus.CREATED)
    public Request createRequest(@RequestBody Request request){
        Service service = new Service(request.getService().getType());
        Product product = new Product(request.getProduct().isBergamota(), request.getProduct().isLavanda(), request.getProduct().isLimao(), request.getProduct().isHortela(), request.getProduct().isCapim_limao(), request.getProduct().isEucalipto());
        serviceRepository.save(service);
        productRepository.save(product);
        request.setService(service);
        request.setProduct(product);
        return requestRepository.save(request);
    }

    @PutMapping("update/{id}/status")
    public ResponseEntity<Request> updateStatus(@PathVariable Long id, @RequestBody Request updatedRequest) {
        Optional<Request> optionalRequest = requestRepository.findById(id);

        if (optionalRequest.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Request request = optionalRequest.get();
        request.setStatus(updatedRequest.getStatus());

        requestRepository.save(request);

        return ResponseEntity.ok(request);
    }

    @GetMapping("/getAllRequests")
    public List<Request> getAllRequests() {
        return requestRepository.findAllByOrderByCreatedDateDesc();
    }
}
