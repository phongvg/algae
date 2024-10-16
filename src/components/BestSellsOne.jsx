import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountdown } from "../helper/Countdown";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const BestSellsOne = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='best sells py-80'>
      <div className='container container-lg'>
        <div className='section-heading'>
          <div className='flex-between flex-wrap gap-8'>
            <h5 className='mb-0'>Sản phẩm bán chạy</h5>
          </div>
        </div>
        <div className='row g-12'>
          <div className='col-xxl-8'>
            <div className='row gy-4'>
              {PRODUCTS.slice(0, 4).map((item, index) => (
                <div className='col-md-6' key={index}>
                  <div
                    className='product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16'
                    style={{ justifyContent: "unset" }}>
                    <div className=''>
                      <span className='product-card__badge bg-danger-600 px-8 py-4 text-sm text-white'>Sale 50% </span>
                      <Link to='/product-details' className='product-card__thumb flex-center'>
                        <img src={`assets/images/products/${item.image}`} alt='' />
                      </Link>
                      <div className='countdown' id='countdown6'>
                        <ul className='countdown-list style-three flex-align flex-wrap'>
                          <li className='countdown-list__item text-heading flex-align gap-4 text-sm fw-medium'>
                            <span className='hours' />
                            {timeLeft.hours} Giờ
                          </li>
                          <li className='countdown-list__item text-heading flex-align gap-4 text-sm fw-medium'>
                            <span className='minutes' />
                            {timeLeft.minutes} Phút
                          </li>
                          <li className='countdown-list__item text-heading flex-align gap-4 text-sm fw-medium'>
                            <span className='seconds' />
                            {timeLeft.seconds} Giây
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='product-card__content pt-32'>
                      <div className='product-card__price mb-8'>
                        <span className='text-heading text-md fw-semibold '>{FormatPriceVND(item.price)}</span>
                      </div>
                      <div className='flex-align gap-6'>
                        <span className='text-xs fw-bold text-gray-600'>4.8</span>
                        <span className='text-15 fw-bold text-warning-600 d-flex'>
                          <i className='ph-fill ph-star' />
                        </span>
                        <span className='text-xs fw-bold text-gray-600'>(17k)</span>
                      </div>
                      <h6 className='title text-md fw-semibold mt-12 mb-8'>
                        <Link to='/product-details' className='link text-line-2'>
                          {item.name}
                        </Link>
                      </h6>
                      <Link
                        to='/cart'
                        className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center'>
                        Thêm vào Giỏ hàng <i className='ph ph-shopping-cart' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-xxl-4'>
            <div className='position-relative rounded-16 bg-light-purple overflow-hidden p-28 z-1 text-center'>
              <div className=''>
                <img
                  src='assets/images/bg/special-snacks.png'
                  alt=''
                  className='position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img'
                />
                <div className='d-xxl-block d-none'>
                  <img src={`assets/images/products/${PRODUCTS[0].image}`} width={230} alt='' />
                </div>
              </div>
              <div className='py-xl-4'>
                <h4 className='mb-8 text-line-1'>{PRODUCTS[0].name}</h4>
                <div className='countdown my-32' id='countdown5'>
                  <ul className='countdown-list style-two flex-center flex-wrap'>
                    <li className='countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white'>
                      <span className='hours' />
                      {timeLeft.hours} Giờ
                    </li>
                    <li className='countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white'>
                      <span className='minutes' />
                      {timeLeft.minutes} Phút
                    </li>
                    <li className='countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white'>
                      <span className='seconds' />
                      {timeLeft.seconds} Giây
                    </li>
                  </ul>
                </div>
                <Link to='/shop' className='mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8' tabIndex={0}>
                  Mua ngay
                  <span className='icon text-xl d-flex'>
                    <i className='ph ph-arrow-right' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellsOne;
