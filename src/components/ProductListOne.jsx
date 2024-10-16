import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const ProductListOne = () => {
  return (
    <div className='product mt-24'>
      <div className='container container-lg'>
        <div className='row gy-4 g-12'>
          {PRODUCTS.map((item, index) => (
            <div key={index} className='col-xxl-2 col-lg-3 col-sm-4 col-6'>
              <div className='product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                <Link
                  to='/cart'
                  className='product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16'>
                  <i className='ph ph-shopping-cart' />
                </Link>
                <Link to='/product-details' className='product-card__thumb flex-center'>
                  <img src={`assets/images/products/${item.image}`} alt='' />
                </Link>
                <div className='product-card__content mt-12'>
                  <div className='product-card__price mb-16'>
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
                    <Link to='/product-details' className='link text-line-2' style={{ minHeight: "38px" }}>
                      {item.name}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListOne;
