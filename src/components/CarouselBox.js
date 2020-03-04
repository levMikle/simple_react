import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forest.jpg';
import foresthImg from '../assets/foresth.jpg';
import mountImg from '../assets/mount.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foresthImg}
                            alt="Forest_high"
                        />
                        <Carousel.Caption>
                            <h3>Forest_high image</h3>
                            <p>Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={mountImg}
                            alt="Mount"
                        />
                        <Carousel.Caption>
                            <h3>Mount image</h3>
                            <p>Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        );
    }
}
