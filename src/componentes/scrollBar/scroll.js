import imagem1 from '../../img/fraco.PNG'
import imagem2 from '../../img/massagem.PNG'
import imagem3 from '../../img/rosto.PNG'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function scroll() {
    return (
        <div style={{display: 'block', paddingTop: 30}}>
            <Carousel>
                <Carousel.Item>
                    <img src={imagem1} id="img"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imagem2} id="img"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imagem3} id="img"></img>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}