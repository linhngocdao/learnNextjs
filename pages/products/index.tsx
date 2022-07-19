import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { getAll } from '../../api/product'
import useSWR from 'swr'
import useProduct from '../../hooks/use-product'




type ProductsProps = {
  products: any[]
}
// client
const Products = () => {
//lấy dữ liệu từ api
// const fetcher = async (url) => {
//   const { data } = await getAll(url)
//   return data
// };

// const { data, error } = useSWR('/products', fetcher, { dedupingInterval: 5000});
const {data, error, create, mutate, removes} = useProduct();



if(!data) return <div>Loading....</div>
if(error) return <div>Fail to loading</div>
return (
  <div>
  {data.map((item) => (
      <div key={item.id}>
          <Link href={`/products/${item.id}`}><a > {item.name} <span>|</span> {item.desc}</a></Link>
      
          
          <button className='p-3 bg-slate-200 rounded-[20px] text-[15px] hover:bg-slate-700 hover:text-[#fff] hover:transition-[5s] ml-[30px] mt-[10px] w-[100px]' onClick={() => mutate(removes(item.id))}> Xóa</button>
          <button className='p-3 bg-slate-200 rounded-[20px] text-[15px] hover:bg-slate-700 hover:text-[#fff] hover:transition-[5s] ml-[20px] mt-[10px] w-[100px]'> Cập nhật</button>
      </div>
      
  ))}
  <div className='pt-[23px]'>
  <button className='p-3 bg-slate-200 rounded-[20px] text-[15px] hover:bg-slate-700 hover:text-[#fff] hover:transition-[5s]' onClick={() => mutate(create({name:'Product 5', desc:'good product'}))}> Add Products</button>
  </div>
  
  
</div>
)
}
export default Products

// getStaticProps without data
// getStaticProps with data