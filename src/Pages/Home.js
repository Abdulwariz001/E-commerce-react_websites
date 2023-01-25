import Carousel from 'react-bootstrap/Carousel';
import Productpage from './Productpage'
function Home(){
    return(
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block imag"
            src="images/oraimo.jpg"
            alt="oraimo"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block imag"
            src="images/cloth1.jpg"
            alt="cloth"
            />

            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block imag"
            src="images/Oraimo2.jpg"
            alt="oraimo powerbank"
            />

            <Carousel.Caption>
            <h3></h3>
            <p>
                
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <div>
        <Productpage />
    </div>
 </>

    )
}
export default Home