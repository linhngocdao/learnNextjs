import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { getAll } from '../../api/product'
import useSWR from 'swr'



type ProductsProps = {
  products: any[]
}
// client
const Products = ({products}: ProductsProps) => {
//   console.log('Product component', products)
//   if(!products) return null;
//   return (
//     <div>{products.map(item => (
//       <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
//     ))}</div>
//   )
// }


// server
// export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
//   console.log('getStaticProps');
//   const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
//   const data = await response.json();

//   return {
//     props: {
//       products: data.map(item => ({id: item.id, name: item.name}))
//     },
//     revalidate: 5
//   }

//lấy dữ liệu từ api
const fetcher = async (url) => {
  const { data } = await getAll(url)
  return data
};

const { data, error } = useSWR('/products', fetcher, { dedupingInterval: 5000});


if(!data) return <div>Loading....</div>
if(error) return <div>Fail to loading</div>
return (
  <div>
  {data.map((item) => (
      <div key={item.id}>
          <Link href={`/products/${item.id}`}>{item.name}</Link>
      </div>
  ))}
</div>
)
}
export default Products

// getStaticProps without data
// getStaticProps with data