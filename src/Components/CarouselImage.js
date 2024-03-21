import React from 'react';
import exampleImage1 from '../Assets/Images/bg5551.jpg';
import exampleImage2 from '../Assets/Images/chizuru.jpg';
import exampleImage3 from '../Assets/Images/EVA-01.jpg';

const CarouselImage = ({ text }) => {
    let imageSrc;

    switch (text) {
        case 'First slide':
            imageSrc = exampleImage1;
            break;
        case 'Second slide':
            imageSrc = exampleImage2;
            break;
        case 'Third slide':
            imageSrc = exampleImage3;
            break;
        default:
            imageSrc = exampleImage1;
    }

    return (
        <img
            className="d-block w-100"
            src={imageSrc}
            alt={text}
        />
    );

};

export default CarouselImage;