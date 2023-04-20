import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';

export default function CarouselComponent({array}) {
  return (
    <>
      <div className='carousel'>
          <Carousel>
            {array.map((item) => (
              <Carousel.Item key={array.indexOf(item)}>
                <div className='carousel-inner-item'>
                  <img src={item.image} className="carrousel-image" alt={item.name} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      </div>
    </>
  )
}