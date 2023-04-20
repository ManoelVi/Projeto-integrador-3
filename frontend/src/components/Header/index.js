import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './index.css';
import './index425px.css';
import './index1024px.css';

export default function Header() {
  // TODO: Implementar o login
  /* if(window.location.pathname.includes('admin')){
    const isLogged = localStorage.getItem('isLogged');
    if(!isLogged){
      window.location.href = '/login';
    }
  } */
  return (
    <>
      <header id="header">
        <div className="list">
          <img src={logo} id="header-logo" alt="Lanzelotti Beauty Logo" />
          <ul>
            <li><Link to="/" className="elementos">Home</Link></li>
            <li><Link to="/servicos" className="elementos">Serviços</Link></li>
            <li><Link to="/requisicao" className="elementos">Solicitação</Link></li>
            <li><Link to="/login" className="elementos login">Sou administrador</Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}