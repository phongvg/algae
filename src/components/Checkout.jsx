import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("payment1");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };

  return (
    <section className='py-20 checkout'>
      <div className='container container-lg'>
        <div className='py-20 mb-40 border border-gray-100 rounded-8 px-30'>
          <span className=''>
            Bạn có mã ưu đãi?{" "}
            <Link to='/cart' className='text-gray-900 fw-semibold hover-text-decoration-underline hover-text-main-600'>
              Nhập mã ưu đãi
            </Link>{" "}
          </span>
        </div>
        <div className='row'>
          <div className='col-xl-9 col-lg-8'>
            <form action='#' className='pe-xl-5'>
              <div className='row gy-3'>
                <div className='col-sm-6 col-xs-6'>
                  <input type='text' className='border-gray-100 common-input' placeholder='Họ và tên đệm' />
                </div>
                <div className='col-sm-6 col-xs-6'>
                  <input type='text' className='border-gray-100 common-input' placeholder='Tên' />
                </div>
                <div className='col-12'>
                  <input type='text' className='border-gray-100 common-input' placeholder='Tên công ty (tùy chọn)' />
                </div>
                <div className='col-12'>
                  <input type='text' className='border-gray-100 common-input' placeholder='Quốc gia' />
                </div>
                <div className='col-12'>
                  <input type='text' className='border-gray-100 common-input' placeholder='Địa chỉ' />
                </div>
                <div className='col-12'>
                  <input type='text' className='border-gray-100 common-input' placeholder='Mã bưu điện (tùy chọn)' />
                </div>
                <div className='col-12'>
                  <input type='number' className='border-gray-100 common-input' placeholder='Số điện thoại' />
                </div>
                <div className='col-12'>
                  <input type='email' className='border-gray-100 common-input' placeholder='Địa chỉ email' />
                </div>
                <div className='col-12'>
                  <div className='my-40'>
                    <h6 className='mb-24 text-lg'>Ghi chú đơn hàng (tùy chọn)</h6>
                    <input
                      type='text'
                      className='border-gray-100 common-input'
                      placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-xl-3 col-lg-4'>
            <div className='checkout-sidebar'>
              <div className='p-24 text-center bg-color-three rounded-8'>
                <span className='text-xl text-gray-900 fw-semibold'>Đơn hàng</span>
              </div>
              <div className='px-24 py-40 mt-24 border border-gray-100 rounded-8'>
                <div className='gap-8 pb-32 mb-32 border-gray-100 border-bottom flex-between'>
                  <span className='text-xl text-gray-900 fw-medium font-heading-two'>Sản phẩm</span>
                  <span className='text-xl text-gray-900 fw-medium font-heading-two'>Thành tiền</span>
                </div>
                {PRODUCTS.slice(0, 3).map((item, index) => (
                  <div key={index} className='gap-24 mb-32 flex-between'>
                    <div className='gap-12 flex-align'>
                      <span className='text-gray-900 fw-normal text-md font-heading-two text-line-2 w-144'>{item.name}</span>
                      <span className='text-gray-900 fw-normal text-md font-heading-two'>
                        <i className='ph-bold ph-x' />
                      </span>
                      <span className='text-gray-900 fw-semibold text-md font-heading-two'>1</span>
                    </div>
                    <span className='text-gray-900 fw-bold text-md font-heading-two'>{FormatPriceVND(item.price)}</span>
                  </div>
                ))}
                <div className='border-gray-100 border-top pt-30 mt-30'>
                  <div className='gap-8 mb-32 flex-between'>
                    <span className='text-xl text-gray-900 font-heading-two fw-semibold'>Thành tiền</span>
                    <span className='text-gray-900 font-heading-two text-md fw-bold'>{FormatPriceVND(500000)}</span>
                  </div>
                  <div className='gap-8 mb-0 flex-between'>
                    <span className='text-xl text-gray-900 font-heading-two fw-semibold'>Tổng cộng</span>
                    <span className='text-gray-900 font-heading-two text-md fw-bold'>{FormatPriceVND(500000)}</span>
                  </div>
                </div>
              </div>
              <Link to='/checkout' className='mt-20 mb-56 btn btn-main py-18 w-100 rounded-8'>
                Đặt hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
