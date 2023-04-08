package lanzelotti.beauty.lanzelotti.beauty.java.lanzelotti.beauty.lanzelotti.beauty.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_oil")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private boolean bergamota;
    @Column
    private boolean lavanda;
    @Column
    private boolean limao;
    @Column
    private boolean hortela;
    @Column
    private boolean capim_limao;
    @Column
    private boolean eucalipto;
    @OneToMany(mappedBy = "product")
    private List<Request> requests;

    public Product(boolean bergamota, boolean lavanda, boolean limao, boolean hortela, boolean capim_limao,
            boolean eucalipto) {
        this.bergamota = bergamota;
        this.lavanda = lavanda;
        this.limao = limao;
        this.hortela = hortela;
        this.capim_limao = capim_limao;
        this.eucalipto = eucalipto;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public boolean isBergamota() {
        return bergamota;
    }
    public void setBergamota(boolean bergamota) {
        this.bergamota = bergamota;
    }
    public boolean isLavanda() {
        return lavanda;
    }
    public void setLavanda(boolean lavanda) {
        this.lavanda = lavanda;
    }
    public boolean isLimao() {
        return limao;
    }
    public void setLimao(boolean limao) {
        this.limao = limao;
    }
    public boolean isHortela() {
        return hortela;
    }
    public void setHortela(boolean hortela) {
        this.hortela = hortela;
    }
    public boolean isCapim_limao() {
        return capim_limao;
    }
    public void setCapim_limao(boolean capim_limao) {
        this.capim_limao = capim_limao;
    }
    public boolean isEucalipto() {
        return eucalipto;
    }
    public void setEucalipto(boolean eucalipto) {
        this.eucalipto = eucalipto;
    }
}
