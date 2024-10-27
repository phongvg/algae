import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const BannerOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type='button'
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}>
        <i className='ph ph-caret-right' />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}>
        <i className='ph ph-caret-left' />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='banner'>
      <div className='container container-lg'>
        <div className='rounded-24 overflow-hidden position-relative arrow-center'>
          {/* <img
            src='/assets/images/bg/banner-bg.png'
            alt=''
            className='banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24'
          /> */}
          <div className='banner-slider'>
            <Slider {...settings}>
              <div className='banner-slider__item'>
                <div className='banner-slider__inner flex-between position-relative'>
                  <div className='banner-item__thumb'>
                    <img src='https://vastcom.vn/wp-content/uploads/2023/11/22banner-6-copy.jpg' alt='' />
                  </div>
                </div>
              </div>
              <div className='banner-slider__item'>
                <div className='banner-slider__inner flex-between position-relative'>
                  <div className='banner-item__thumb'>
                    <img src='https://vastcom.vn/wp-content/uploads/2023/11/banner-111-1.jpg' alt='' />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
