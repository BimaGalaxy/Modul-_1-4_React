import react from "react";

// Bootrap Import
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Karya.css';

class Karya extends react.Component{
    render() {
        return(
            <>
                <div className="carousel-container">
                    <div className="carousell-width">
                        <div className="overlay"></div>
                        <Carousel>
                            <Carousel.Item>
                                <CarouselImage text="First slide" />
                                <Carousel.Caption>
                                    <h3>Some of my artwork</h3>
                                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <CarouselImage text="Second slide" />
                                <Carousel.Caption>
                                    <h3>Some of my artwork</h3>
                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <CarouselImage text="Third slide" />
                                <Carousel.Caption>
                                    <h3>Some of my artwork</h3>
                                    {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <section id="karya-2">
                    <div className="container">

                    </div>
                </section>
            </>
        )
    }
}

export default Karya;