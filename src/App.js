import './App.css';
import Banner from './componentes/Banner';
import Passos from './componentes/passos/Passos';
import Scroll from './componentes/scrollBar/scroll';
import SobreNos from './componentes/sobreNos/sobreNos';


function App() {

  return (
    <div className="App">
        <Banner />
        <Scroll />
        <h2 id='espaco'></h2>
        <SobreNos/>
        <h2 id='espaco'></h2>
        <Passos/>
        <h2 id='espaco'></h2>
    </div>
  );
}

export default App;
