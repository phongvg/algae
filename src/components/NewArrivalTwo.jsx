import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const NewArrivalTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type='button'
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}>
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
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}>
        <i className='ph ph-caret-left' />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className='new-arrival pb-80'>
      <div className='container container-lg'>
        <div className='section-heading'>
          <div className='flex-between flex-wrap gap-8'>
            <h5 className='mb-0'>Có thể bạn sẽ thích</h5>
            <div className='flex-align mr-point gap-16'>
              <Link to='/shop' className='text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline'>
                Xem tất cả
              </Link>
            </div>
          </div>
        </div>
        <div className='new-arrival__slider arrow-style-two'>
          <Slider {...settings}>
            {PRODUCTS.map((product) => (
              <div>
                <div className='product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                  <Link to='/product-details' className='product-card__thumb flex-center'>
                    <img src={`assets/images/products/${product.image}`} alt='' />
                  </Link>
                  <div className='product-card__content p-sm-2'>
                    <h6 className='title text-lg fw-semibold mt-12 mb-8'>
                      <Link to='/product-details' className='link text-line-2'>
                        {product.name}
                      </Link>
                    </h6>
                    <div className='product-card__content mt-12'>
                      <div className='product-card__price mb-8'>
                        <span className='text-heading text-md fw-semibold '>{FormatPriceVND(product.price)}</span>
                      </div>
                      <div className='flex-align gap-6'>
                        <span className='text-xs fw-bold text-gray-600'>4.8</span>
                        <span className='text-15 fw-bold text-warning-600 d-flex'>
                          <i className='ph-fill ph-star' />
                        </span>
                        <span className='text-xs fw-bold text-gray-600'>(17k)</span>
                      </div>
                      <Link
                        to='/cart'
                        className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center'>
                        Thêm vào giỏ hàng <i className='ph ph-shopping-cart' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalTwo;
