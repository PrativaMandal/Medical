import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/CarouselCard.css"; // Import custom CSS

const CarouselCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Autoplay the slider
        autoplaySpeed: 2000,    // Speed of autoplay in ms
        //pauseOnHover: true,     // Pause autoplay when hovering
        arrows: true,           // Enable navigation arrows
    };

    const slides = [
        {
            img: "https://bootstrapmade.com/content/demo/Medicio/assets/img/hero-carousel/hero-carousel-1.jpg",
            alt: "Slide 1"
        },
        {
            img: "https://bootstrapmade.com/content/demo/Medicio/assets/img/hero-carousel/hero-carousel-2.jpg",
            alt: "Slide 2"
        },
        {
            img: "https://bootstrapmade.com/content/demo/Medicio/assets/img/hero-carousel/hero-carousel-3.jpg",
            alt: "Slide 3"
        }
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={slide.img} alt={slide.alt} className="carousel-img" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselCard;
