import React from 'react'
import { useRouter } from 'next/router'


const ProductDetail = (props: Props) => {
    const router = useRouter();
    console.log('router', router.query);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail