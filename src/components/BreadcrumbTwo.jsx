import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbTwo = ({ title, subtitle }) => {
  return (
    <div className='breadcrumb py-26 bg-color-one'>
      <div className='container container-lg'>
        <div className='flex-wrap gap-16 breadcrumb-wrapper flex-between'>
          <ul className='flex-wrap gap-8 flex-align'>
            <li className='text-sm'>
              <Link to='/' className='gap-8 text-main-600 flex-align'>
                <i className='ph ph-house' />
                Trang chủ
              </Link>
            </li>
            {subtitle && (
              <>
                <li className='text-gray-500 flex-align'>
                  <i className='ph ph-caret-right' />
                </li>
                <li className='text-sm'>
                  <Link to='/shop' className='gap-8 text-main-600 flex-align'>
                    {subtitle}
                  </Link>
                </li>
              </>
            )}
            <li className='text-gray-500 flex-align'>
              <i className='ph ph-caret-right' />
            </li>
            <li className='text-sm text-neutral-600'>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbTwo;
