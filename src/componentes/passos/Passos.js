import './passos.css'
import papel from '../../img/papel.PNG'
import homem from '../../img/homem.PNG'
import cartao from '../../img/cartao.PNG'

export default function Passos() {
  return (
    <div className='steps'>
      <div className='images'>
        <img src={papel}></img>
        <img src={homem}></img>
        <img src={cartao}></img>
      </div>
      <div className='barra'>
        <hr></hr>
      </div>
      <div className='bolinhas'>
        <a>1</a>
        <a>2</a>
        <a>3</a>
      </div>
      <div className='textos'>
        <p>Escolha dos serviços mediante a conferência do catálogo</p>
        <p>Escolha dos serviços mediante a conferência do catálogo</p>
        <p>Aguardar o contato pelo e-mail/whatsapp</p>
      </div>
    </div>
  )
}