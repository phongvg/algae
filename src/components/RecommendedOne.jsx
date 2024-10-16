import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const RecommendedOne = () => {
  return (
    <section className='recommended pt-80'>
      <div className='container container-lg'>
        <div className='section-heading flex-between flex-wrap gap-16'>
          <h5 className='mb-0'>Dành cho bạn</h5>
          <ul className='nav common-tab nav-pills' id='pills-tab' role='tablist'>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link active'
                id='pills-all-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-all'
                type='button'
                role='tab'
                aria-controls='pills-all'
                aria-selected='true'>
                Tất cả
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='pills-grocery-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-grocery'
                type='button'
                role='tab'
                aria-controls='pills-grocery'
                aria-selected='false'>
                Đậu tương men
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='pills-fruits-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-fruits'
                type='button'
                role='tab'
                aria-controls='pills-fruits'
                aria-selected='false'>
                Đông trùng hạ thảo
              </button>
            </li>
          </ul>
        </div>
        <div className='tab-content' id='pills-tabContent'>
          <div className='tab-pane fade show active' id='pills-all' role='tabpanel' aria-labelledby='pills-all-tab' tabIndex={0}>
            <div className='row g-12'>
              {PRODUCTS.map((item, index) => (
                <div key={index} className='col-xxl-2 col-lg-3 col-sm-4 col-6'>
                  <div className='product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                    <Link to='/product-details' className='product-card__thumb flex-center'>
                      <img src={`assets/images/products/${item.image}`} alt='' />
                    </Link>
                    <div className='product-card__content p-sm-2'>
                      <h6 className='title text-lg fw-semibold mt-12 mb-8'>
                        <Link to='/product-details' className='link text-line-2'>
                          {item.name}
                        </Link>
                      </h6>
                      <div className='product-card__content mt-12'>
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
                        <Link
                          to='/cart'
                          className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center'>
                          Thêm vào Giỏ hàng <i className='ph ph-shopping-cart' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='tab-pane fade' id='pills-grocery' role='tabpanel' aria-labelledby='pills-grocery-tab' tabIndex={0}>
            <div className='row g-12'>
              {PRODUCTS.map((item, index) => (
                <div key={index} className='col-xxl-2 col-lg-3 col-sm-4 col-6'>
                  <div className='product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                    <Link to='/product-details' className='product-card__thumb flex-center'>
                      <img src={`assets/images/products/${item.image}`} alt='' />
                    </Link>
                    <div className='product-card__content p-sm-2'>
                      <h6 className='title text-lg fw-semibold mt-12 mb-8'>
                        <Link to='/product-details' className='link text-line-2'>
                          {item.name}
                        </Link>
                      </h6>
                      <div className='product-card__content mt-12'>
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
                        <Link
                          to='/cart'
                          className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center'>
                          Thêm vào Giỏ hàng <i className='ph ph-shopping-cart' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='tab-pane fade' id='pills-fruits' role='tabpanel' aria-labelledby='pills-fruits-tab' tabIndex={0}>
            <div className='row g-12'>
              {PRODUCTS.map((item, index) => (
                <div key={index} className='col-xxl-2 col-lg-3 col-sm-4 col-6'>
                  <div className='product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                    <Link to='/product-details' className='product-card__thumb flex-center'>
                      <img src={`assets/images/products/${item.image}`} alt='' />
                    </Link>
                    <div className='product-card__content p-sm-2'>
                      <h6 className='title text-lg fw-semibold mt-12 mb-8'>
                        <Link to='/product-details' className='link text-line-2'>
                          {item.name}
                        </Link>
                      </h6>
                      <div className='product-card__content mt-12'>
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
                        <Link
                          to='/cart'
                          className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center'>
                          Thêm vào Giỏ hàng <i className='ph ph-shopping-cart' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='tab-pane fade' id='pills-juices' role='tabpanel' aria-labelledby='pills-juices-tab' tabIndex={0}>
            <div className='row g-12'>
              {PRODUCTS.map((item, index) => (
                <div key={index} className='col-xxl-2 col-lg-3 col-sm-4 col-6'>
                  <div className='product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                    <Link to='/product-details' className='product-card__thumb flex-center'>
                      <img src={`assets/images/products/${item.image}`} alt='' />
                    </Link>
                    <div className='product-card__content p-sm-2'>
                      <h6 className='title text-lg fw-semibold mt-12 mb-8'>
                        <Link to='/product-details' className='link text-line-2'>
                          {item.name}
                        </Link>
                      </h6>
                      <div className='product-card__content mt-12'>
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
                        <Link
                          to='/cart'
                          className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center'>
                          Thêm vào Giỏ hàng <i className='ph ph-shopping-cart' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedOne;
