package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model;

import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String clientName;
    @Column
    private String clientEmail;
    @Column
    private String clientCpf;
    @Column
    private String clientPhone;
    @Column
    private String clientCep;
    @Column
    private String clientStreet;
    @Column
    private int clientNumber;
    @Column
    private String clientDistrict;
    @Column
    private String clientComplement;
    @Column
    private String clientState;
    @Column
    private int status;
    @Column
    private String createdDate = new SimpleDateFormat("dd/MM/yyyy").format(new Date());
    @ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "id")
    private Service service;
    
    @ManyToOne
    @JoinColumn(name = "product_oil_id", referencedColumnName = "id")
    private Product product;


    
    public Request(long id, String clientName, String clientEmail, String clientCpf, String clientPhone,
            String clientCep, String clientStreet, int clientNumber, String clientDistrict, String clientComplement,
            String clientState, int status, Service service, Product product) {
        this.id = id;
        this.clientName = clientName;
        this.clientEmail = clientEmail;
        this.clientCpf = clientCpf;
        this.clientPhone = clientPhone;
        this.clientCep = clientCep;
        this.clientStreet = clientStreet;
        this.clientNumber = clientNumber;
        this.clientDistrict = clientDistrict;
        this.clientComplement = clientComplement;
        this.clientState = clientState;
        this.status = status;
        this.service = service;
        this.product = product;
    } 
    
    public Request() {
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getClientName() {
        return clientName;
    }
    public void setClientName(String clientName) {
        this.clientName = clientName;
    }
    public String getClientEmail() {
        return clientEmail;
    }
    public void setClientEmail(String clientEmail) {
        this.clientEmail = clientEmail;
    }
    public String getClientCpf() {
        return clientCpf;
    }
    public void setClientCpf(String clientCpf) {
        this.clientCpf = clientCpf;
    }
    public String getClientPhone() {
        return clientPhone;
    }
    public void setClientPhone(String clientPhone) {
        this.clientPhone = clientPhone;
    }
    public String getClientCep() {
        return clientCep;
    }
    public void setClientCep(String clientCep) {
        this.clientCep = clientCep;
    }
    public String getClientStreet() {
        return clientStreet;
    }
    public void setClientStreet(String clientStreet) {
        this.clientStreet = clientStreet;
    }
    public int getClientNumber() {
        return clientNumber;
    }
    public void setClientNumber(int clientNumber) {
        this.clientNumber = clientNumber;
    }
    public String getClientDistrict() {
        return clientDistrict;
    }
    public void setClientDistrict(String clientDistrict) {
        this.clientDistrict = clientDistrict;
    }
    public String getClientComplement() {
        return clientComplement;
    }
    public void setClientComplement(String clientComplement) {
        this.clientComplement = clientComplement;
    }
    public String getClientState() {
        return clientState;
    }
    public void setClientState(String clientState) {
        this.clientState = clientState;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public Service getService() {
        return service;
    }
    public void setService(Service service) {
        this.service = service;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
    
}
