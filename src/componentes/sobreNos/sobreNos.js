import './sobre.css'
import imagem from '../../img/fale.PNG'

export default function(){
    return(
       <div className='fale'>
            <img src={imagem}/>
            <h3 id="titulo">Sobre nós</h3>
            <p id="descricao">Olá, meu nome é Giulia Lanzelotte e sou uma uma profissional de estética e cosmetologia formada pelo Centro Universitário Senac.</p>
            <p id="descricao2"> Ofereço serviços de estética como limpeza de pele, drenagem linfática, massagem relaxanto e entre outros.</p>
            <button>Fale conosco</button>
       </div>
    )
}