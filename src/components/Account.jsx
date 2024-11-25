import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <section className='py-20 account'>
      <div className='container container-lg'>
        <form action='#'>
          <div className='row gy-4'>
            {/* Login Card Start */}
            <div className='col-xl-6 pe-xl-5'>
              <div className='px-24 py-40 border border-gray-100 hover-border-main-600 transition-1 rounded-16 h-100'>
                <h6 className='mb-32 text-xl'>Đăng nhập</h6>
                <div className='mb-24'>
                  <label htmlFor='username' className='mb-8 text-lg text-neutral-900 fw-medium'>
                    Tên đăng nhập hoặc email <span className='text-danger'>*</span>{" "}
                  </label>
                  <input type='text' className='common-input' id='username' placeholder='' />
                </div>
                <div className='mb-24'>
                  <label htmlFor='password' className='mb-8 text-lg text-neutral-900 fw-medium'>
                    Mật khẩu
                  </label>
                  <div className='position-relative'>
                    <input type='password' className='common-input' id='password' placeholder='' />
                    <span
                      className='cursor-pointer toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph ph-eye-slash'
                      id='#password'
                    />
                  </div>
                </div>
                <div className='mt-20 mb-24'>
                  <div className='flex-wrap gap-48 flex-align'>
                    <button type='submit' className='px-40 btn btn-main py-18'>
                      Đăng nhập
                    </button>
                    <div className='form-check common-check'>
                      <input className='form-check-input' type='checkbox' defaultValue='' id='remember' />
                      <label className='form-check-label flex-grow-1' htmlFor='remember'>
                        Lưu thông tin đăng nhập
                      </label>
                    </div>
                  </div>
                </div>
                <div className='mt-20'>
                  <Link to='#' className='text-sm text-danger-600 fw-semibold hover-text-decoration-underline'>
                    Quên mật khẩu?
                  </Link>
                </div>
              </div>
            </div>
            {/* Login Card End */}
            {/* Register Card Start */}
            <div className='col-xl-6'>
              <div className='px-24 py-40 border border-gray-100 hover-border-main-600 transition-1 rounded-16'>
                <h6 className='mb-32 text-xl'>Đăng ký</h6>
                <div className='mb-24'>
                  <label htmlFor='usernameTwo' className='mb-8 text-lg text-neutral-900 fw-medium'>
                    Tên đăng nhập <span className='text-danger'>*</span>{" "}
                  </label>
                  <input type='text' className='common-input' id='usernameTwo' placeholder='' />
                </div>
                <div className='mb-24'>
                  <label htmlFor='emailTwo' className='mb-8 text-lg text-neutral-900 fw-medium'>
                    Địa chỉ email
                    <span className='text-danger'>*</span>{" "}
                  </label>
                  <input type='email' className='common-input' id='emailTwo' placeholder='' />
                </div>
                <div className='mb-24'>
                  <label htmlFor='enter-password' className='mb-8 text-lg text-neutral-900 fw-medium'>
                    Mật khẩu
                    <span className='text-danger'>*</span>
                  </label>
                  <div className='position-relative'>
                    <input type='password' className='common-input' id='enter-password' placeholder='' />
                    <span
                      className='cursor-pointer toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph ph-eye-slash'
                      id='#enter-password'
                    />
                  </div>
                </div>
                <div className='mt-20'>
                  <button type='submit' className='px-40 btn btn-main py-18'>
                    Tạo tài khoản
                  </button>
                </div>
              </div>
            </div>
            {/* Register Card End */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Account;
