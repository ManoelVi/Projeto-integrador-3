import "./Banner.css";
import minhaImagem from '../../img/logo.png'

export default function Banner () {
  return (
    <header className="banner">
      <div className="lista">
      <img src={minhaImagem} id="imges"/>
        <ul>
          <li className="elementos">Home</li>
          <li className="elementos">Serviços</li>
          <li className="elementos">Solicitação</li>

          <a href="https" className="login">Login</a>
        </ul>
      </div>
    </header>
  );
};
