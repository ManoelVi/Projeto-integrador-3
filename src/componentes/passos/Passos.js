import './passos.css'
import papel from '../../img/papel.PNG'
import homem from '../../img/homem.PNG'
import cartao from '../../img/cartao.PNG'

export default function Passos(){
    return(
        <div className='imgs'>
            <img  src = {papel} id="imgss"/>  
            <img  src = {homem} id="imgss"/> 
            <img  src = {cartao} id="imgss"/> 
            <p id='textos'>Escolha dos serviços mediante a conferência do catálogo</p>
            <p id='textos1'>Envio das solicitações dos serviços/produtos</p>
            <p id='textos2'>Aguardar o contato pelo e-mail/whatsapp</p>  
        </div>
    )
}