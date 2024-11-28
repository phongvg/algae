import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";
import select2 from "select2";
import { CATEGORIES } from "../data/categories";

select2(query);

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className='overlay' />
      <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
      {/* ==================== Search Box Start Here ==================== */}
      <form action='#' className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type='button'
          className='w-48 h-48 m-16 text-2xl text-white border border-gray-100 search-box__close position-absolute inset-block-start-0 inset-inline-end-0 rounded-circle flex-center hover-text-gray-800 hover-bg-white transition-1'>
          <i className='ph ph-x' />
        </button>
        <div className='container'>
          <div className='position-relative'>
            <input type='text' className='px-24 py-16 text-xl form-control rounded-pill pe-64' placeholder='Search for a product or brand' />
            <button
              type='submit'
              className='w-48 h-48 text-xl text-white bg-main-600 rounded-circle flex-center position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'>
              <i className='ph ph-magnifying-glass' />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type='button'
          className='close-button'>
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link to='/' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.jpg' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            {/* Nav Menu Start */}
            <ul className='nav-menu flex-align nav-menu--mobile'>
              {/* Home Menu */}
              <li className='nav-menu__item'>
                <Link to='#' className='nav-menu__link'>
                  Trang chủ
                </Link>
              </li>

              {/* Shop Menu */}
              <li className='nav-menu__item'>
                <Link to='/shop' className='nav-menu__link'>
                  Sản phẩm
                </Link>
              </li>

              {/* Blog Menu */}
              <li className='nav-menu__item'>
                <Link to='#' className='nav-menu__link'>
                  Bài viết
                </Link>
              </li>

              {/* Contact Us Menu */}
              <li className='nav-menu__item'>
                <Link to='/contact' className='nav-menu__link'>
                  Liên hệ
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Top Start ========================= */}
      <div className='header-top bg-main-600 flex-between'>
        <div className='container container-lg'>
          <div className='flex-wrap gap-8 flex-between'>
            <div></div>
            <ul className='flex-wrap header-top__right flex-align'>
              <li className='border-right-item'>
                <Link to='/account' className='gap-6 py-8 text-sm text-white flex-align'>
                  <span className='icon text-md d-flex'>
                    {" "}
                    <i className='ph ph-user-circle' />{" "}
                  </span>
                  <span className='hover-text-decoration-underline'>Tài khoản</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ======================= Middle Top End ========================= */}
      {/* ======================= Middle Header Start ========================= */}
      <header className='border-gray-100 header-middle bg-color-one border-bottom'>
        <div className='container container-lg'>
          <nav className='header-inner flex-between'>
            {/* Logo Start */}
            <div className='logo'>
              <Link to='/' className='link'>
                <img src='assets/images/logo/logo.jpg' alt='Logo' />
              </Link>
            </div>
            {/* Logo End  */}
            {/* form location Start */}
            <form action='#' className='flex-wrap flex-align form-location-wrapper'>
              <div className='h-48 search-category d-flex select-border-end-0 radius-end-0 search-form d-sm-flex d-none'>
                <select defaultValue={1} className='border border-gray-200 js-example-basic-single border-end-0' name='state'>
                  <option value={1}>Tất cả danh mục</option>
                  {CATEGORIES.map((category, index) => (
                    <option key={index} value={1}>
                      {category.title}
                    </option>
                  ))}
                </select>
                <div className='search-form__wrapper position-relative'>
                  <input
                    type='text'
                    className='search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44'
                    placeholder='Nhập tên sản phẩm hoặc tên thương hiệu...'
                  />
                  <button
                    type='submit'
                    className='w-32 h-32 text-xl text-white bg-main-600 rounded-circle flex-center position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'>
                    <i className='ph ph-magnifying-glass' />
                  </button>
                </div>
              </div>
            </form>
            {/* form location start */}
            {/* Header Middle Right start */}
            <div className='header-right flex-align d-lg-block d-none'>
              <div className='flex-wrap gap-12 flex-align'>
                <button type='button' className='gap-4 search-icon flex-align d-lg-none d-flex item-hover'>
                  <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                    <i className='ph ph-magnifying-glass' />
                  </span>
                </button>
                <Link to='/cart' className='gap-4 flex-align item-hover'>
                  <span className='mt-6 text-2xl text-gray-700 d-flex position-relative me-6 item-hover__text'>
                    <i className='ph ph-heart' />
                    <span className='w-16 h-16 text-xs text-white flex-center rounded-circle bg-main-600 position-absolute top-n6 end-n4'>2</span>
                  </span>
                  <span className='text-gray-500 text-md item-hover__text d-none d-lg-flex'>Yêu thích</span>
                </Link>
                <Link to='/cart' className='gap-4 flex-align item-hover'>
                  <span className='mt-6 text-2xl text-gray-700 d-flex position-relative me-6 item-hover__text'>
                    <i className='ph ph-shopping-cart-simple' />
                    <span className='w-16 h-16 text-xs text-white flex-center rounded-circle bg-main-600 position-absolute top-n6 end-n4'>2</span>
                  </span>
                  <span className='text-gray-500 text-md item-hover__text d-none d-lg-flex'>Giỏ hàng</span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header End ========================= */}
      {/* ==================== Header Start Here ==================== */}
      <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`} style={{ zIndex: 999 }}>
        <div className='container container-lg'>
          <nav className='gap-8 header-inner d-flex justify-content-between'>
            <div className='flex-align menu-category-wrapper'>
              {/* Category Dropdown Start */}
              <div className='category on-hover-item'>
                <button
                  onClick={handleCategoryToggle}
                  type='button'
                  className='gap-8 p-16 border-gray-100 category__button flex-align fw-medium border-end border-start text-heading'>
                  <span className='text-2xl icon d-xs-flex d-none'>
                    <i className='ph ph-dots-nine' />
                  </span>
                  <span className='d-sm-flex d-none'>Tất cả danh mục</span>
                  <span className='text-xl arrow-icon d-flex'>
                    <i className='ph ph-caret-down' />
                  </span>
                </button>
                <div
                  className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${
                    activeCategory && "active"
                  }`}>
                  <button
                    onClick={() => {
                      handleCategoryToggle();
                      setActiveIndexCat(null);
                    }}
                    type='button'
                    className='mt-4 text-xl close-responsive-dropdown rounded-circle position-absolute inset-inline-end-0 inset-block-start-0 me-8 d-lg-none d-flex'>
                    {" "}
                    <i className='ph ph-x' />{" "}
                  </button>
                  {/* Logo Start */}
                  <div className='px-16 logo d-lg-none d-block'>
                    <Link to='/' className='link'>
                      <img src='assets/images/logo/logo.jpg' alt='Logo' />
                    </Link>
                  </div>
                  {/* Logo End */}
                  <ul className='p-0 py-8 overflow-y-auto scroll-sm w-300 max-h-400'>
                    {CATEGORIES.map((category, index) => (
                      <li key={index} className={`has-submenus-submenu ${activeIndexCat === 0 ? "active" : ""}`}>
                        <Link
                          onClick={() => setActiveIndexCat(null)}
                          to='/shop'
                          className='gap-8 px-16 py-12 text-gray-500 text-15 flex-align rounded-0'>
                          <span>{category.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                {/* Nav Menu Start */}
                <ul className='nav-menu flex-align '>
                  <li className='nav-menu__item'>
                    <Link to='/' className='nav-menu__link'>
                      Trang chủ
                    </Link>
                  </li>
                  <li className='nav-menu__item'>
                    <Link to='/shop' className='nav-menu__link'>
                      Sản phẩm
                    </Link>
                  </li>
                  <li className='nav-menu__item'>
                    <Link to='#' className='nav-menu__link'>
                      Bài viết
                    </Link>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/contact' className={(navData) => (navData.isActive ? "nav-menu__link activePage" : "nav-menu__link")}>
                      Liên hệ
                    </NavLink>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className='header-right flex-align'>
              <Link to='/tel:0982685849' className='gap-8 p-12 text-lg text-white bg-main-600 h-100 hover-bg-main-800 flex-align d-lg-flex d-none'>
                <div className='d-flex text-32'>
                  <i className='ph ph-phone-call' />
                </div>
                0982-685-849
              </Link>
              <div className='me-16 d-lg-none d-block'>
                <div className='flex-wrap gap-12 flex-align'>
                  <button onClick={handleSearchToggle} type='button' className='gap-4 search-icon flex-align d-lg-none d-flex item-hover'>
                    <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                      <i className='ph ph-magnifying-glass' />
                    </span>
                  </button>
                  <Link to='/cart' className='gap-4 flex-align item-hover'>
                    <span className='mt-6 text-2xl text-gray-700 d-flex position-relative me-6 item-hover__text'>
                      <i className='ph ph-heart' />
                      <span className='w-16 h-16 text-xs text-white flex-center rounded-circle bg-main-600 position-absolute top-n6 end-n4'>2</span>
                    </span>
                    <span className='text-gray-500 text-md item-hover__text d-none d-lg-flex'>Yêu thích</span>
                  </Link>
                  <Link to='/cart' className='gap-4 flex-align item-hover'>
                    <span className='mt-6 text-2xl text-gray-700 d-flex position-relative me-6 item-hover__text'>
                      <i className='ph ph-shopping-cart-simple' />
                      <span className='w-16 h-16 text-xs text-white flex-center rounded-circle bg-main-600 position-absolute top-n6 end-n4'>2</span>
                    </span>
                    <span className='text-gray-500 text-md item-hover__text d-none d-lg-flex'>Giỏ hàng</span>
                  </Link>
                </div>
              </div>
              <button onClick={handleMenuToggle} type='button' className='text-4xl text-gray-800 toggle-mobileMenu d-lg-none ms-3n d-flex'>
                {" "}
                <i className='ph ph-list' />{" "}
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderOne;
