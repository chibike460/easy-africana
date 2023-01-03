import React from 'react';
import './services.css';
import gal1 from '../images/gal1.png';
import gal2 from '../images/gal2.png';
import gal3 from '../images/gal3.png';
import gal4 from '../images/gal4.png';
import gal5 from '../images/gal5.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { clientData } from '../data';
import { Testimonial } from './Testimonial';


const Services = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  return (
    <>

      <section className="about-section">
        <div className="about-cont">
          <h3>WHAT WE DO</h3>
          <h2>Easy Africana Services</h2>
          <p>We provide top notch services ranging from different industries and sectors all over the world while  focusing on your most critical issues and
            opportunites. </p>
        </div>

      </section>

      <section className="text-white">
        <div className="gallery-section">
          <div className="gallery-content">

            <div className="container-one">
              <div className="image-one">
                <div className="image-div">
                  <img alt="gallery" src={gal1} />
                  <div className="cover-text">
                    <h2>Digital Transformation</h2>
                    <p>Texts.</p>
                  </div>
                </div>
              </div>

              <div className="image-one">
                <div className="image-div">
                  <img alt="gallery" src={gal2} />
                  <div className="cover-text">
                    <h2>Business Strategies</h2>
                    <p>Texts.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="container-one">
              <div className="image-one">
                <div className="image-div">
                  <img alt="gallery" src={gal4} />
                  <div className="cover-text">
                    <h2>Business Management</h2>
                    <p>Texts</p>
                  </div>
                </div>
              </div>

              <div className="image-one">
                <div className="image-div">
                  <img alt="gallery" src={gal3} />
                  <div className="cover-text">
                    <h2>Legal Advise</h2>
                    <p>Texts</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="last-image">
              <img alt="gallery" src={gal5} />
              <div className="last-image-text">
                <h2>Innovative Technology</h2>
                <p>Texts</p>
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* clients section */}
      <div className="client-section">
        <h1 className="client-title">Trusted by over <span>200,000</span> clients including</h1>
        <Slider {...settings}>
          {clientData.map((item) => (
            <div className="cards" key={item.id}>
              <img src={item.linkImg} />
            </div>

          ))}
        </Slider>
      </div>





      <Testimonial />


      {/* <section>
        <div className="testimonial-container">
          <h1 className="">Here is What Our Clients Say About Us</h1>
          <div className="test-main">

            <div className="container">
              <div className="testimonial">
                <div className="test-first-part">
                  <img alt="testimonial 1" src={img1} className="" />
                  <span className="">
                    <p className="name">Asila Gold</p>
                    <p className="role">CEO, Alliance LTD</p>
                  </span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-quote" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" /> </svg>
                <p className="test-texts">Easy Africana is a great team that is transparent and focuses on continual improvment of their clients. So glad I worked with them, my company enjoys the benefits they yielded.
                </p>

              </div>
            </div>



            <div className="container">
              <div className="testimonial">
                <div className="test-first-part">
                  <img alt="testimonial 1" src={img2} className="" />
                  <span className="">
                    <p className="name">Siyabonga Kato</p>
                    <p className="role">Founder, Comm Network Services.</p>
                  </span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-quote" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" /> </svg>
                <p className="test-texts">I am pleased with the services that they rendered and we intend to work with them in future. Go Easy Africana.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section> */}

    </>
  )
}

export default Services