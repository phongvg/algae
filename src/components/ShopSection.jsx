import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import { CATEGORIES } from "../data/categories";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const ShopSection = () => {
  let [grid, setGrid] = useState(false);

  let [active, setActive] = useState(false);
  let sidebarController = () => {
    setActive(!active);
  };

  return (
    <section className='shop py-80'>
      <div className={`side-overlay ${active && "show"}`}></div>
      <div className='container container-lg'>
        <div className='row'>
          {/* Sidebar Start */}
          <div className='col-lg-3'>
            <div className={`shop-sidebar ${active && "active"}`}>
              <button
                onClick={sidebarController}
                type='button'
                className='w-32 h-32 mt-8 border border-gray-100 shop-sidebar__close d-lg-none d-flex flex-center rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 hover-text-white hover-border-main-600'>
                <i className='ph ph-x' />
              </button>
              <div className='p-32 mb-32 border border-gray-100 shop-sidebar__box rounded-8'>
                <h6 className='pb-24 mb-24 text-xl border-gray-100 border-bottom'>Danh mục sản phẩm</h6>
                <ul className='overflow-y-auto max-h-540 scroll-sm'>
                  {CATEGORIES.map((item, index) => (
                    <li key={index} className={`${index === CATEGORIES.length - 1 ? "mb-0" : "mb-24"}`}>
                      <Link to='/product-details-two' className='text-gray-900 hover-text-main-600'>
                        {item.title} (10)
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='p-32 mb-32 border border-gray-100 shop-sidebar__box rounded-8'>
                <h6 className='pb-24 mb-24 text-xl border-gray-100 border-bottom'>Lọc theo giá</h6>
                <div className='custom--range'>
                  <ReactSlider
                    className='horizontal-slider'
                    thumbClassName='example-thumb'
                    trackClassName='example-track'
                    defaultValue={[0, 100]}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => {
                      const { key, ...restProps } = props;
                      return (
                        <div {...restProps} key={state.index}>
                          {state.valueNow}
                        </div>
                      );
                    }}
                    pearling
                    minDistance={10}
                  />

                  <br />
                  <br />
                  <div className='flex-wrap-reverse gap-8 mt-24 flex-between '>
                    <button type='button' className='h-40 btn btn-main flex-align'>
                      Lọc{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className='p-32 mb-32 border border-gray-100 shop-sidebar__box rounded-8'>
                <h6 className='pb-24 mb-24 text-xl border-gray-100 border-bottom'>Lọc theo đánh giá</h6>
                <div className='gap-8 mb-20 flex-align position-relative'>
                  <label className='cursor-pointer position-absolute w-100 h-100' htmlFor='rating5'>
                    {" "}
                  </label>
                  <div className='mb-0 common-check common-radio'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' id='rating5' />
                  </div>
                  <div
                    className='h-8 bg-gray-100 progress w-100 rounded-pill'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}>
                    <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "70%" }} />
                  </div>
                  <div className='gap-4 flex-align'>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                  </div>
                  <span className='flex-shrink-0 text-gray-900'>124</span>
                </div>
                <div className='gap-8 mb-20 flex-align position-relative'>
                  <label className='cursor-pointer position-absolute w-100 h-100' htmlFor='rating4'>
                    {" "}
                  </label>
                  <div className='mb-0 common-check common-radio'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' id='rating4' />
                  </div>
                  <div
                    className='h-8 bg-gray-100 progress w-100 rounded-pill'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}>
                    <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "50%" }} />
                  </div>
                  <div className='gap-4 flex-align'>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                  </div>
                  <span className='flex-shrink-0 text-gray-900'>52</span>
                </div>
                <div className='gap-8 mb-20 flex-align position-relative'>
                  <label className='cursor-pointer position-absolute w-100 h-100' htmlFor='rating3'>
                    {" "}
                  </label>
                  <div className='mb-0 common-check common-radio'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' id='rating3' />
                  </div>
                  <div
                    className='h-8 bg-gray-100 progress w-100 rounded-pill'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={35}
                    aria-valuemin={0}
                    aria-valuemax={100}>
                    <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "35%" }} />
                  </div>
                  <div className='gap-4 flex-align'>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                  </div>
                  <span className='flex-shrink-0 text-gray-900'>12</span>
                </div>
                <div className='gap-8 mb-20 flex-align position-relative'>
                  <label className='cursor-pointer position-absolute w-100 h-100' htmlFor='rating2'>
                    {" "}
                  </label>
                  <div className='mb-0 common-check common-radio'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' id='rating2' />
                  </div>
                  <div
                    className='h-8 bg-gray-100 progress w-100 rounded-pill'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}>
                    <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "20%" }} />
                  </div>
                  <div className='gap-4 flex-align'>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                  </div>
                  <span className='flex-shrink-0 text-gray-900'>5</span>
                </div>
                <div className='gap-8 mb-0 flex-align position-relative'>
                  <label className='cursor-pointer position-absolute w-100 h-100' htmlFor='rating1'>
                    {" "}
                  </label>
                  <div className='mb-0 common-check common-radio'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' id='rating1' />
                  </div>
                  <div
                    className='h-8 bg-gray-100 progress w-100 rounded-pill'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={5}
                    aria-valuemin={0}
                    aria-valuemax={100}>
                    <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "5%" }} />
                  </div>
                  <div className='gap-4 flex-align'>
                    <span className='text-xs fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-xs text-gray-400 fw-medium d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                  </div>
                  <span className='flex-shrink-0 text-gray-900'>2</span>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar End */}
          {/* Content Start */}
          <div className='col-lg-9'>
            {/* Top Start */}
            <div className='flex-wrap gap-16 mb-40 flex-between '>
              <span className='text-gray-900'>Hiển thị 1-20 trong tổng số 85 kết quả</span>
              <div className='flex-wrap gap-16 position-relative flex-align'>
                <div className='gap-16 list-grid-btns flex-align'>
                  <button
                    onClick={() => setGrid(true)}
                    type='button'
                    className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${
                      grid === true && "border-main-600 text-white bg-main-600"
                    }`}>
                    <i className='ph-bold ph-list-dashes' />
                  </button>
                  <button
                    onClick={() => setGrid(false)}
                    type='button'
                    className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${
                      grid === false && "border-main-600 text-white bg-main-600"
                    }`}>
                    <i className='ph ph-squares-four' />
                  </button>
                </div>
                <div className='gap-4 text-gray-500 position-relative flex-align text-14'>
                  <label htmlFor='sorting' className='flex-shrink-0 text-inherit'>
                    Sắp xếp theo:{" "}
                  </label>
                  <select defaultValue={1} className='w-auto form-control common-input px-14 py-14 text-inherit rounded-6' id='sorting'>
                    <option value={1}>Phổ biến</option>
                    <option value={1}>Mới nhất</option>
                    <option value={1}>Giá: thấp đến cao</option>
                    <option value={1}>Giá: cao đến thấp</option>
                  </select>
                </div>
                <button
                  onClick={sidebarController}
                  type='button'
                  className='text-2xl border border-gray-100 w-44 h-44 d-lg-none d-flex flex-center rounded-6 sidebar-btn'>
                  <i className='ph-bold ph-funnel' />
                </button>
              </div>
            </div>
            {/* Top End */}
            <div className={`list-grid-wrapper ${grid && "list-view"}`}>
              {PRODUCTS.map((item, index) => (
                <div
                  key={index}
                  className='p-16 border border-gray-100 product-card h-100 hover-border-main-600 rounded-16 position-relative transition-2'>
                  <Link to='/product-details' className='product-card__thumb flex-center rounded-8 bg-gray-50 position-relative'>
                    <img src={`assets/images/products/${item.image}`} alt='' className='w-full h-100 max-w-unset' />
                  </Link>
                  <div className='mt-16 product-card__content' style={{ width: "100%" }}>
                    <h6 className='mt-12 mb-8 text-lg title fw-semibold'>
                      <Link to='/product-details' className='link text-line-2' tabIndex={0}>
                        {item.name}
                      </Link>
                    </h6>
                    <div className='gap-6 mt-16 mb-20 flex-align'>
                      <span className='text-xs text-gray-500 fw-medium'>4.8</span>
                      <span className='text-15 fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-xs text-gray-500 fw-medium'>(17k)</span>
                    </div>
                    <div className='my-20 product-card__price'>
                      <span className='text-heading text-md fw-semibold '>{FormatPriceVND(item.price)}</span>
                    </div>
                    <Link
                      to='/cart'
                      className='gap-8 px-24 product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 rounded-8 flex-center fw-medium'
                      tabIndex={0}>
                      Thêm vào giỏ hàng <i className='ph ph-shopping-cart' />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Start */}
            <ul className='flex-wrap gap-16 pagination flex-center'>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-xxl rounded-8 fw-medium text-neutral-600' to='#'>
                  <i className='ph-bold ph-arrow-left' />
                </Link>
              </li>
              <li className='page-item active'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  01
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  02
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  03
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  04
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  05
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  06
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-md rounded-8 fw-medium text-neutral-600' to='#'>
                  07
                </Link>
              </li>
              <li className='page-item'>
                <Link className='w-64 h-64 border border-gray-100 page-link flex-center text-xxl rounded-8 fw-medium text-neutral-600' to='#'>
                  <i className='ph-bold ph-arrow-right' />
                </Link>
              </li>
            </ul>
            {/* Pagination End */}
          </div>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
