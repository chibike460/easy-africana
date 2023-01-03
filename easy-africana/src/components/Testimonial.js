import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import { testimonialData } from '../testdata';
import { FaQuoteLeft } from "react-icons/fa";


export const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="testimonial-section">
                <h1 className="testimonial-title">Here is What Our <span>Clients</span> Say About Us</h1>
                <Slider {...settings}>
                    {testimonialData.map((item) => (
                        <div className="card" key={item.id}>
                            <div className="card-top">
                                <img
                                    src={item.linkImg}
                                    alt={item.name}
                                />
                                <div className="down">
                                    <h2>{item.name}</h2>
                                    <p>{item.role}</p>
                                    
                                </div>

                            </div>

                            <div className="card-bottom">
                                <p><FaQuoteLeft /></p>
                                <p>{item.info}</p>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>





        </>
    )
}
