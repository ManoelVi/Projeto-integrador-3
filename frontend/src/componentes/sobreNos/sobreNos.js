import './sobre.css'
import imagem from '../../img/fale.PNG'

export default function sobreNos() {
    return (
        <div className='faleConosco'>
            <img className="img" src={imagem} />
            <div className='texto'>
                <h3 id="titulo">Sobre nós</h3>
                <p id="descricao">Olá, meu nome é Giulia Lanzelotte e sou uma uma profissional de estética e cosmetologia formada pelo Centro Universitário Senac.</p>
                <p id="descricao2"> Ofereço serviços de estética como limpeza de pele, drenagem linfática, massagem relaxanto e entre outros.</p>
                <a className="vejaServicos" href="https">Veja meus serviços</a>
            </div>
        </div>
    )
}