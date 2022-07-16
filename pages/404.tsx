import React from 'react';
import EmptyLayout from '../components/Layout/empty';
import Link from 'next/link'

type Props = {};
const NotFound = (props: Props) => {
  return (
    <div>
      <div className='empty'>
         <div className='image'>
         <img src="https://res.cloudinary.com/assignment22/image/upload/v1657849761/404_utoudw.png"  alt=""  />
         </div>
         
         <p><Link href="/">Trở về trang chủ</Link></p>
        </div>
    </div>
  );
};

NotFound.Layout = EmptyLayout;
export default NotFound;
