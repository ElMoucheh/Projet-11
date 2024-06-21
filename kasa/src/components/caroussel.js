import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../assets/img/white/arrow-up.svg';
import '../assets/carousel.scss';

const Carousel = ({ logement }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex((prevIndex) => prevIndex - 1);
        } else {
            setCurrentImageIndex(logement.pictures.length - 1);
        }
    };

    const handleNextClick = () => {
        if (currentImageIndex < logement.pictures.length - 1) {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const handlePaginationClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="carousel-container">
            {logement.pictures.length > 1 && (
                <button className="carousel-control prev" onClick={handlePrevClick}>
                    <ArrowIcon className="arrow-icon" />
                </button>
            )}
            <img
                src={logement.pictures[currentImageIndex]}
                alt={logement.title}
                className="carousel-image"
            />
            {logement.pictures.length > 1 && (
                <button className="carousel-control next" onClick={handleNextClick}>
                    <ArrowIcon className="arrow-icon" />
                </button>
            )}
            {logement.pictures.length > 1 && (
                <div className="carousel-pagination">
                    {logement.pictures.map((_, index) => (
                        <span
                            key={index}
                            className={`pagination-dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => handlePaginationClick(index)}
                        ></span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
