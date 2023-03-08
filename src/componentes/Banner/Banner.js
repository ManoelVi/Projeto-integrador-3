import "./Banner.css";
import minhaImagem from '../../img/Capturar.PNG'

export const Banner = () => {
  return (
    <header className="banner">
      <div className="Lista">
      <img src={minhaImagem} id="imges"/>
        <ul>
          <li className="elementos">Home</li>
          <li className="elementos">Serviços</li>
          <li className="elementos">Solicitação</li>

          <button className="login">Login</button>
        </ul>
      </div>
    </header>
  );
};
