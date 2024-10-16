import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { CATEGORIES } from "../data/categories";

const FeatureOne = () => {
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
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='feature' id='featureSection'>
      <div className='container container-lg'>
        <div className='position-relative arrow-center'>
          <div className='flex-align'>
            <button
              type='button'
              id='feature-item-wrapper-prev'
              className='slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1'>
              <i className='ph ph-caret-left' />
            </button>
            <button
              type='button'
              id='feature-item-wrapper-next'
              className='slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1'>
              <i className='ph ph-caret-right' />
            </button>
          </div>
          <div className='feature-item-wrapper'>
            <Slider {...settings}>
              {Array(14)
                .fill(CATEGORIES)
                .flat()
                .map((item, index) => (
                  <div key={index} className='feature-item text-center'>
                    <div className='feature-item__thumb rounded-circle'>
                      <Link to='/shop' className='w-100 h-100 flex-center'>
                        <img src='assets/images/thumbs/feature-img1.png' alt='' />
                      </Link>
                    </div>
                    <div className='feature-item__content mt-16'>
                      <h6 className='text-lg mb-8'>
                        <Link to='/shop' className='text-inherit'>
                          {item.title}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;