import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import landingPageMock from '../../mocks/landingPageMock';
import aboutUsImage from '../../assets/img/aboutUs.png';
import form from '../../assets/img/form.png';
import man from '../../assets/img/man.png';
import creditCard from '../../assets/img/cartao.png';
import './index.css';
import './index320px.css';
import './index425px.css';
import './index768px.css';
import './index1024px.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Carousel array={landingPageMock} />
        <div className='about-us'>
          <img className="about-us-image" src={aboutUsImage} alt='Sobre nós' />
          <div className='text'>
            <h3>Sobre nós</h3>
            <p>Olá, meu nome é Giulia Lanzelotte e sou uma uma profissional de estética e cosmetologia formada pelo Centro Universitário Senac.</p>
            <p> Ofereço serviços de estética como limpeza de pele, drenagem linfática, massagem relaxanto e entre outros.</p>
            <Link to='/meus-servicos' className='see-my-services'>Veja meus serviços</Link>
          </div>
        </div>
        <h1 className='steps-title'>Veja como é fácil fazer uma compra!</h1>
        <div className='steps'>
          <div className='step-images'>
            <img src={form} alt='' />
            <img src={man} alt='' />
            <img src={creditCard} alt='' />
          </div>
          <div className='barra'>
            <hr />
          </div>
          <div className='bolinhas'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className='textos'>
            <p>Escolha dos serviços mediante a conferência do catálogo</p>
            <p>Escolha dos serviços mediante a conferência do catálogo</p>
            <p>Aguardar o contato pelo e-mail/whatsapp</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}