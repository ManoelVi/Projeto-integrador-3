import './App.css';
import Banner from './componentes/Banner/Banner';
import Passos from './componentes/passos/Passos';
import Scroll from './componentes/scrollBar/scroll';
import SobreNos from './componentes/sobreNos/sobreNos';
import Footer from './componentes/footer/footer';


function App() {

  return (
    <div className="App">
        <Banner />
        <Scroll />
        <SobreNos/>
        <Passos/>
        <Footer />
    </div>
  );
}

export default App;
