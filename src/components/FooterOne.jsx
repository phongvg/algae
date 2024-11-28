import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <footer className='footer py-120'>
      <img src='assets/images/bg/body-bottom-bg.png' alt='BG' className='body-bottom-bg' />
      <div className='container container-lg'>
        <div className='footer-item-wrapper d-flex align-items-start justify-content-between flex-wrap'>
          <div className='footer-item'>
            <div className='footer-item__logo'>
              <Link to='/'>
                {" "}
                <img src='assets/images/logo/logo.jpg' alt='' />
              </Link>
            </div>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0'>
                <i className='ph-fill ph-map-pin' />
              </span>
              <span className='text-md text-gray-900 '>Địa chỉ: Xóm 6, Quỳnh Lương, Quỳnh Lưu, Nghệ An</span>
            </div>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0'>
                <i className='ph-fill ph-phone-call' />
              </span>
              <div className='flex-align gap-16 flex-wrap'>
                <Link to='/tel:+00123456789' className='text-md text-gray-900 hover-text-main-600'>
                  Hotline: 0982-685-849
                </Link>
              </div>
            </div>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0'>
                <i className='ph-fill ph-envelope' />
              </span>
              <Link to='/mailto:support24@marketpro.com' className='text-md text-gray-900 hover-text-main-600'>
                Email: taoxoannghean@gmail.com
              </Link>
            </div>
          </div>
          <div className='footer-item'>
            <h6 className='footer-item__title'>Thông tin</h6>
            <ul className='footer-menu'>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Trở thành Nhà cung cấp
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Chương trình liên kết
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Chính sách bảo mật
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Nhà cung cấp
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Kế hoạch mở rộng
                </Link>
              </li>
              <li className=''>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Cộng đồng
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h6 className='footer-item__title'>Hỗ trợ</h6>
            <ul className='footer-menu'>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Trung tâm hỗ trợ
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/contact' className='text-gray-600 hover-text-main-600'>
                  Liên hệ
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Báo cáo
                </Link>
              </li>
              <li className=''>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Mua hàng trực tuyến
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h6 className='footer-item__title'>Tài khoản</h6>
            <ul className='footer-menu'>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Tài khoản
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Đơn hàng
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Giỏ hàng
                </Link>
              </li>
              <li className='mb-16'>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  So sánh
                </Link>
              </li>
              <li className=''>
                <Link to='/shop' className='text-gray-600 hover-text-main-600'>
                  Yêu thích
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h6 className=''>Mua sắm ngay</h6>
            <p className='mb-16'>Kết nối với chúng tôi</p>
            <ul className='flex-align gap-16'>
              <li>
                <Link
                  to='/https://www.facebook.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'>
                  <i className='ph-fill ph-facebook-logo' />
                </Link>
              </li>
              <li>
                <Link
                  to='/https://www.twitter.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'>
                  <i className='ph-fill ph-twitter-logo' />
                </Link>
              </li>
              <li>
                <Link
                  to='/https://www.linkedin.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'>
                  <i className='ph-fill ph-instagram-logo' />
                </Link>
              </li>
              <li>
                <Link
                  to='/https://www.pinterest.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'>
                  <i className='ph-fill ph-linkedin-logo' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
