import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../../Categories'
import CategoryCard from '../../components/categoryCard/categoryCard'

const Product = () => {
  const {name} = useParams();
  let productList = Categories.find((prod)=> prod.name===name)

  return (
    <div className='text-center mt-4' >
      <h1>
        Product list for every Category
      </h1>
      <div>
        {productList.sub.sub_name}
      </div>
      
    </div>
  )
}

export default Product