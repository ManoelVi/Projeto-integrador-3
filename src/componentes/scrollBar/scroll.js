import '../scrollBar/scroll.css'
import imagem1 from '../../img/fraco.PNG'
import imagem2 from '../../img/massagem.PNG'
import imagem3 from '../../img/rosto.PNG'

export default function scroll(){
    return(
        <div className="imagens">
            <img src={imagem1} id="img"></img>
            <img src={imagem2} id="img"></img>
            <img src={imagem3} id="img"></img>
        </div>
    )
}