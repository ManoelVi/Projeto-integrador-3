package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model.Request;
import lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.repository.RequestRepository;

@RestController
@RequestMapping("api/")
public class RequestController {
    @Autowired
    private RequestRepository requestRepository;

    @PostMapping("request")
    @ResponseStatus(HttpStatus.CREATED)
    public Request createRequest(@RequestBody Request request){
        return requestRepository.save(request);
    }

    // @PostMapping("product")
    // @ResponseStatus(HttpStatus.CREATED)
    // public Product createProduct(@RequestBody Product product){
    //     return productRepository.save(product);
    // }

    // @PostMapping("service")
    // @ResponseStatus(HttpStatus.CREATED)
    // public Service createService(@RequestBody Service service){
    //     return serviceRepository.save(service);
    // }
}
