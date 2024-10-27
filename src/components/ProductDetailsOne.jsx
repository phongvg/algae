import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";
import { PRODUCTS } from "../data/products";
import { FormatPriceVND } from "../helper/Price";

const ProductDetailsOne = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const productImages = [
    "assets/images/thumbs/product-details-thumb1.png",
    "assets/images/thumbs/product-details-thumb2.png",
    "assets/images/thumbs/product-details-thumb3.png",
    "assets/images/thumbs/product-details-thumb2.png",
  ];

  // increment & decrement
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

  const [mainImage, setMainImage] = useState(productImages[0]);

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <section className='product-details py-20'>
      <div className='container container-lg'>
        <div className='row gy-4'>
          <div className='row gy-4'>
            <div className='col-xl-6'>
              <div className='product-details__left'>
                <div className='product-details__thumb-slider border border-gray-100 rounded-16'>
                  <div className=''>
                    <div className='product-details__thumb flex-center h-100'>
                      <img src={`assets/images/products/${PRODUCTS[0].image}`} alt='Main Product' />
                    </div>
                  </div>
                </div>
                <div className='mt-24'>
                  <div className='product-details__images-slider'>
                    <Slider {...settingsThumbs}>
                      {PRODUCTS.map((image, index) => (
                        <div
                          className='center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8'
                          key={index}
                          onClick={() => setMainImage(image.image)}>
                          <img className='thum' src={`assets/images/products/${image.image}`} alt={`Thumbnail ${index}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='product-details__content'>
                <h5 className='mb-12'>{PRODUCTS[0].name}</h5>
                <div className='flex-align flex-wrap gap-12'>
                  <div className='flex-align gap-12 flex-wrap'>
                    <div className='flex-align gap-8'>
                      <span className='text-15 fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-15 fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-15 fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-15 fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-15 fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                    </div>
                    <span className='text-sm fw-medium text-neutral-600'>4.7 Đánh giá</span>
                    <span className='text-sm fw-medium text-gray-500'>(21,671)</span>
                  </div>
                  <span className='text-sm fw-medium text-gray-500'>|</span>
                  <span className='text-gray-900'>
                    {" "}
                    <span className='text-gray-400'>SKU:</span>EB4DRP{" "}
                  </span>
                </div>
                <span className='mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block' />
                <p className='text-gray-700'>
                  Giúp bổ sung protein, vitamin và khoáng chất, tăng cường hệ miễn dịch và nâng cao sức đề kháng cho cơ thể. Hỗ trợ điều trị các loại
                  bệnh: Viêm loét dạ dày, đại tràng, táo bón, tiểu đường, các bệnh lý về xương khớp như thấp khớp, khô khớp, thoái hóa khớp, thiếu
                  máu, bệnh thận, hỗ trợ điều trị bệnh ung thư, thải độc các kim loại nặng khỏi cơ thể, làm đẹp vóc dáng, làn da và chống lão hóa da.
                </p>
                <div className='mt-32 flex-align flex-wrap gap-32'>
                  <div className='flex-align gap-8'>
                    <h4 className='mb-0'>{FormatPriceVND(PRODUCTS[0].price)}</h4>
                    <span className='text-md text-gray-500'>{FormatPriceVND(PRODUCTS[0].price * 2)}</span>
                  </div>
                </div>
                <span className='mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block' />
                <span className='text-gray-900 d-block mb-8'>Số lượng:</span>
                <div className='flex-between gap-16 flex-wrap'>
                  <div className='flex-align flex-wrap gap-16'>
                    <div className='border border-gray-100 rounded-pill py-9 px-16 flex-align'>
                      <button onClick={decrementQuantity} type='button' className='quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center'>
                        <i className='ph ph-minus' />
                      </button>
                      <input type='number' className='quantity__input border-0 text-center w-32' value={quantity} readOnly />
                      <button onClick={incrementQuantity} type='button' className='quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center'>
                        <i className='ph ph-plus' />
                      </button>
                    </div>
                    <Link to='#' className='btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48'>
                      {" "}
                      <i className='ph ph-shopping-cart' /> Thêm vào giỏ hàng
                    </Link>
                  </div>
                  <div className='flex-align gap-12'>
                    <Link to='#' className='w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle'>
                      <i className='ph ph-heart' />
                    </Link>
                    <Link to='#' className='w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle'>
                      <i className='ph ph-shuffle' />
                    </Link>
                    <Link to='#' className='w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle'>
                      <i className='ph ph-share-network' />
                    </Link>
                  </div>
                </div>
                <span className='mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block' />
              </div>
            </div>
          </div>
        </div>
        <div className='pt-80'>
          <div className='product-dContent border rounded-24'>
            <div className='product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16'>
              <ul className='nav common-tab nav-pills mb-3' id='pills-tab' role='tablist'>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link active'
                    id='pills-description-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-description'
                    type='button'
                    role='tab'
                    aria-controls='pills-description'
                    aria-selected='true'>
                    Mô tả sản phẩm
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link'
                    id='pills-reviews-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-reviews'
                    type='button'
                    role='tab'
                    aria-controls='pills-reviews'
                    aria-selected='false'>
                    Đánh giá
                  </button>
                </li>
              </ul>
            </div>
            <div className='product-dContent__box'>
              <div className='tab-content' id='pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='pills-description'
                  role='tabpanel'
                  aria-labelledby='pills-description-tab'
                  tabIndex={0}>
                  <div className='mb-40'>
                    <p>
                      Giúp bổ sung protein, vitamin và khoáng chất, tăng cường hệ miễn dịch và nâng cao sức đề kháng cho cơ thể. Hỗ trợ điều trị các
                      loại bệnh: Viêm loét dạ dày, đại tràng, táo bón, tiểu đường, các bệnh lý về xương khớp như thấp khớp, khô khớp, thoái hóa khớp,
                      thiếu máu, bệnh thận, hỗ trợ điều trị bệnh ung thư, thải độc các kim loại nặng khỏi cơ thể, làm đẹp vóc dáng, làn da và chống
                      lão hóa da.
                    </p>
                  </div>
                  <div className='mb-40'>
                    <h6 className='mb-24'>Thông tin sản phẩm</h6>
                    <ul className='mt-32'>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Tên sản phẩm:
                          <span className='text-gray-500'>Tảo Spirulina tươi 500g</span>
                        </span>
                      </li>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Hàm lượng dinh dưỡng:
                          <span className='text-gray-500'>Protein, Lipid, Vitamin A, Vitamin B1, Vitamin B2, Vitamin PP, Ca, Mg, Fe, Zn</span>
                        </span>
                      </li>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Công dụng:
                          <span className='text-gray-500'>
                            Giúp bổ sung protein, vitamin và khoáng chất, tăng cường hệ miễn dịch và nâng cao sức đề kháng cho cơ thể.
                          </span>
                        </span>
                      </li>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Đối tượng sử dụng:
                          <span className='text-gray-500'>Người cần bổ sung Vitamin và khoáng chất. Người bị suy nhược, sức đề kháng kém.</span>
                        </span>
                      </li>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Cách dùng và liều lượng:
                          <span className='text-gray-500'>
                            Hỗ trợ điều trị suy dinh dưỡng thiếu máu, kém ăn: ngày 2 lần, mỗi lần 1-2 viên, uống trước bữa ăn 30 phút hoặc sau bữa ăn
                            1 giờ.
                          </span>
                        </span>
                      </li>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Bảo quản:
                          <span className='text-gray-500'>
                            Bảo quản ở nhiệt độ thấp dưới 0oC. Cách bảo quản tốt nhất là đặt trong ngăn đá tủ lạnh hoặc tủ cấp đông. Chỉ lấy ra khi
                            cần dùng
                          </span>
                        </span>
                      </li>
                      <li className='text-gray-400 mb-14 flex-align gap-14'>
                        <span className='w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle'>
                          <i className='ph ph-check' />
                        </span>
                        <span className='text-heading fw-medium'>
                          Khuyến cáo:
                          <span className='text-gray-500'>
                            Sản phẩm không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kỳ thành
                            phần nào của sản phẩm.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='tab-pane fade' id='pills-reviews' role='tabpanel' aria-labelledby='pills-reviews-tab' tabIndex={0}>
                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44'>
                        <img src='assets/images/thumbs/comment-img1.png' alt='' className='w-52 h-52 object-fit-cover rounded-circle flex-shrink-0' />
                        <div className='flex-grow-1'>
                          <div className='flex-between align-items-start gap-8 '>
                            <div className=''>
                              <h6 className='mb-12 text-md'>Linh Tran</h6>
                              <div className='flex-align gap-8'>
                                <span className='text-15 fw-medium text-warning-600 d-flex'>
                                  <i className='ph-fill ph-star' />
                                </span>
                                <span className='text-15 fw-medium text-warning-600 d-flex'>
                                  <i className='ph-fill ph-star' />
                                </span>
                                <span className='text-15 fw-medium text-warning-600 d-flex'>
                                  <i className='ph-fill ph-star' />
                                </span>
                                <span className='text-15 fw-medium text-warning-600 d-flex'>
                                  <i className='ph-fill ph-star' />
                                </span>
                                <span className='text-15 fw-medium text-warning-600 d-flex'>
                                  <i className='ph-fill ph-star' />
                                </span>
                              </div>
                            </div>
                            <span className='text-gray-800 text-xs'>3 Ngày trước</span>
                          </div>
                          <h6 className='mb-14 text-md mt-24'>Sản phẩm tốt</h6>
                          <p className='text-gray-700'>Tôi rất thích sản phẩm này</p>
                          <div className='flex-align gap-20 mt-22'>
                            <button className='flex-align gap-12 text-gray-700 hover-text-main-600'>
                              <i className='ph-bold ph-thumbs-up' />
                              Thích
                            </button>
                            <Link to='#comment-form' className='flex-align gap-12 text-gray-700 hover-text-main-600'>
                              <i className='ph-bold ph-arrow-bend-up-left' />
                              Trả lời
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='mt-56'>
                        <div className=''>
                          <h6 className='mb-24'>Viết đánh giá</h6>
                          <span className='text-heading mb-8'>Bạn có yêu thích sản phẩm này?</span>
                          <div className='flex-align gap-8'>
                            <span className='text-15 fw-medium text-warning-600 d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            <span className='text-15 fw-medium text-warning-600 d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            <span className='text-15 fw-medium text-warning-600 d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            <span className='text-15 fw-medium text-warning-600 d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            <span className='text-15 fw-medium text-warning-600 d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                          </div>
                        </div>
                        <div className='mt-32'>
                          <form action='#'>
                            <div className='mb-32'>
                              <label htmlFor='title' className='text-neutral-600 mb-8'>
                                Tiêu đề
                              </label>
                              <input type='text' className='common-input rounded-8' id='title' placeholder='Great Products' />
                            </div>
                            <div className='mb-32'>
                              <label htmlFor='desc' className='text-neutral-600 mb-8'>
                                Nội dung
                              </label>
                              <textarea
                                className='common-input rounded-8'
                                id='desc'
                                defaultValue={
                                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                }
                              />
                            </div>
                            <button type='submit' className='btn btn-main rounded-pill'>
                              Gửi đánh giá
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='ms-xxl-5'>
                        <h6 className='mb-24'>Phản hồi của khách hàng</h6>
                        <div className='d-flex flex-wrap gap-44'>
                          <div className='border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center'>
                            <h2 className='mb-6 text-main-600'>4.8</h2>
                            <div className='flex-center gap-8'>
                              <span className='text-15 fw-medium text-warning-600 d-flex'>
                                <i className='ph-fill ph-star' />
                              </span>
                              <span className='text-15 fw-medium text-warning-600 d-flex'>
                                <i className='ph-fill ph-star' />
                              </span>
                              <span className='text-15 fw-medium text-warning-600 d-flex'>
                                <i className='ph-fill ph-star' />
                              </span>
                              <span className='text-15 fw-medium text-warning-600 d-flex'>
                                <i className='ph-fill ph-star' />
                              </span>
                              <span className='text-15 fw-medium text-warning-600 d-flex'>
                                <i className='ph-fill ph-star' />
                              </span>
                            </div>
                            <span className='mt-16 text-gray-500'>Trung bình đánh giá sản phẩm</span>
                          </div>
                          <div className='border border-gray-100 rounded-8 px-24 py-40 flex-grow-1'>
                            <div className='flex-align gap-8 mb-20'>
                              <span className='text-gray-900 flex-shrink-0'>5</span>
                              <div
                                className='progress w-100 bg-gray-100 rounded-pill h-8'
                                role='progressbar'
                                aria-label='Basic example'
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}>
                                <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "70%" }} />
                              </div>
                              <div className='flex-align gap-4'>
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
                              <span className='text-gray-900 flex-shrink-0'>124</span>
                            </div>
                            <div className='flex-align gap-8 mb-20'>
                              <span className='text-gray-900 flex-shrink-0'>4</span>
                              <div
                                className='progress w-100 bg-gray-100 rounded-pill h-8'
                                role='progressbar'
                                aria-label='Basic example'
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}>
                                <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "50%" }} />
                              </div>
                              <div className='flex-align gap-4'>
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
                              <span className='text-gray-900 flex-shrink-0'>52</span>
                            </div>
                            <div className='flex-align gap-8 mb-20'>
                              <span className='text-gray-900 flex-shrink-0'>3</span>
                              <div
                                className='progress w-100 bg-gray-100 rounded-pill h-8'
                                role='progressbar'
                                aria-label='Basic example'
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}>
                                <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "35%" }} />
                              </div>
                              <div className='flex-align gap-4'>
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
                              <span className='text-gray-900 flex-shrink-0'>12</span>
                            </div>
                            <div className='flex-align gap-8 mb-20'>
                              <span className='text-gray-900 flex-shrink-0'>2</span>
                              <div
                                className='progress w-100 bg-gray-100 rounded-pill h-8'
                                role='progressbar'
                                aria-label='Basic example'
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}>
                                <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "20%" }} />
                              </div>
                              <div className='flex-align gap-4'>
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
                              <span className='text-gray-900 flex-shrink-0'>5</span>
                            </div>
                            <div className='flex-align gap-8 mb-0'>
                              <span className='text-gray-900 flex-shrink-0'>1</span>
                              <div
                                className='progress w-100 bg-gray-100 rounded-pill h-8'
                                role='progressbar'
                                aria-label='Basic example'
                                aria-valuenow={5}
                                aria-valuemin={0}
                                aria-valuemax={100}>
                                <div className='progress-bar bg-main-600 rounded-pill' style={{ width: "5%" }} />
                              </div>
                              <div className='flex-align gap-4'>
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
                              <span className='text-gray-900 flex-shrink-0'>2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsOne;
