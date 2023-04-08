package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    public Request(String clientName, String clientEmail, String clientCpf, String clientPhone, String clientCep,
            String clientStreet, int clientNumber, String clientDistrict, String clientComplement, String clientState,
            int status) {
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
    
}
