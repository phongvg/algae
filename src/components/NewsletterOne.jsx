import React from "react";

const NewsletterOne = () => {
  return (
    <div className='newsletter'>
      <div className='container container-lg'>
        <div className='newsletter-box bg-main-600 position-relative rounded-16 gap-16 flex-wrap z-1'>
          <div className='row align-items-center justify-content-center'>
            <div>
              <h2 className='text-white mb-12 text-center'>Đừng bỏ lỡ các ưu đãi</h2>
              <p className='text-white h6 mb-0 text-center'>Đăng ký nhận thông báo mới nhất</p>
              <form action='#' className='position-relative mt-40' style={{ maxWidth: "800px", margin: "0 auto" }}>
                <input
                  type='text'
                  className='form-control common-input rounded-pill py-22 px-16 pe-144'
                  placeholder='Vui lòng nhập địa chỉ email của bạn...'
                />
                <button type='submit' className='btn btn-main-two rounded-pill position-absolute top-50 translate-middle-y inset-inline-end-0 me-10'>
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterOne;
