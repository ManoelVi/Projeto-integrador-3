import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./index.css";
import "./index425px.css";
import skinCareMock from "../../mocks/servicesPageSkinCareMock";
import blendMock from "../../mocks/servicesPageBlendMock";
import essencesMock from "../../mocks/servicesPageEssencesMock";

export default function Servicos() {
  return (
    <>
      <Header/>
      <main>
        <div className="row skin-care">
          {skinCareMock.map((item) => (
            <div key={skinCareMock.indexOf(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {<div className="row blend">
          {blendMock.map((item) => (
            <div key={blendMock.indexOf(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}:</p>
              {item.essences.map((essence) => (
                <p key={item.essences.indexOf(essence)} className="essence">- {essence}</p>
              ))}
            </div>
          ))}
        </div>}
        <div className="row essences">
          {essencesMock.map((item) => (
            <div key={essencesMock.indexOf(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}:</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}