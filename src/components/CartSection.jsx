import React from "react";
import { Link } from "react-router-dom";
import QuantityControl from "../helper/QuantityControl";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const CartSection = () => {
  return (
    <section className='cart py-80'>
      <div className='container container-lg'>
        <div className='row gy-4'>
          <div className='col-xl-9 col-lg-8'>
            <div className='px-40 py-48 border border-gray-100 cart-table rounded-8'>
              <div className='overflow-x-auto scroll-sm scroll-sm-horizontal'>
                <table className='table style-three'>
                  <thead>
                    <tr>
                      <th className='mb-0 text-lg h6 fw-bold'>Xóa</th>
                      <th className='mb-0 text-lg h6 fw-bold'>Tên sản phẩm</th>
                      <th className='mb-0 text-lg h6 fw-bold'>Đơn giá</th>
                      <th className='mb-0 text-lg h6 fw-bold'>Số lượng</th>
                      <th className='mb-0 text-lg h6 fw-bold'>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRODUCTS.slice(0, 3).map((item, index) => (
                      <tr key={index}>
                        <td>
                          <button type='button' className='gap-12 remove-tr-btn flex-align hover-text-danger-600'>
                            <i className='text-2xl ph ph-x-circle d-flex' />
                          </button>
                        </td>
                        <td>
                          <div className='gap-24 table-product d-flex align-items-center'>
                            <Link to='/product-details-two' className='border border-gray-100 table-product__thumb rounded-8 flex-center '>
                              <img src={`assets/images/products/${item.image}`} alt='' />
                            </Link>
                            <div className='table-product__content text-start'>
                              <h6 className='mb-8 text-lg title fw-semibold' style={{ maxWidth: "300px" }}>
                                <Link to='/product-details' className='link text-line-2' tabIndex={0}>
                                  {item.name}
                                </Link>
                              </h6>
                              <div className='gap-16 mb-16 flex-align'>
                                <div className='gap-6 flex-align'>
                                  <span className='text-md fw-medium text-warning-600 d-flex'>
                                    <i className='ph-fill ph-star' />
                                  </span>
                                  <span className='text-gray-900 text-md fw-semibold'>4.8</span>
                                </div>
                                <span className='text-sm text-gray-200 fw-medium'>|</span>
                                <span className='text-sm text-neutral-600'>128 Đánh giá</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className='mb-0 text-lg h6 fw-semibold'>{FormatPriceVND(item.price)}</span>
                        </td>
                        <td>
                          <QuantityControl initialQuantity={1} />
                        </td>
                        <td>
                          <span className='mb-0 text-lg h6 fw-semibold'>{FormatPriceVND(item.price)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex-wrap gap-16 mt-16 flex-between'>
                <div className='gap-16 flex-align'>
                  <input type='text' className='common-input' placeholder='Mã ưu đãi' />
                  <button type='submit' className='btn btn-main py-18 w-100 rounded-8'>
                    Áp dụng
                  </button>
                </div>
                <button type='submit' className='text-lg text-gray-500 hover-text-main-600'>
                  Cập nhật giỏ hàng
                </button>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4'>
            <div className='px-24 py-40 border border-gray-100 cart-sidebar rounded-8'>
              <div className='p-24 bg-color-three rounded-8'>
                <div className='gap-8 mb-32 flex-between'>
                  <span className='text-gray-900 font-heading-two'>Thành tiền</span>
                  <span className='text-gray-900 fw-semibold'>{FormatPriceVND(250000)}</span>
                </div>
                <div className='gap-8 mb-32 flex-between'>
                  <span className='text-gray-900 font-heading-two'>Phí vận chuyển</span>
                  <span className='text-gray-900 fw-semibold'>Miễn phí</span>
                </div>
              </div>
              <div className='p-24 mt-24 bg-color-three rounded-8'>
                <div className='gap-8 flex-between'>
                  <span className='text-xl text-gray-900 fw-semibold'>Tổng cộng</span>
                  <span className='text-xl text-gray-900 fw-semibold'>{FormatPriceVND(250000)}</span>
                </div>
              </div>
              <Link to='/checkout' className='mt-40 btn btn-main py-18 w-100 rounded-8'>
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
