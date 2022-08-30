import React from 'react'
import {Row} from 'react-bootstrap'
import './ProductCard.css'

const ProductCard = ({ title, description, price }) => {
  return (
    <Row className='product-card my-2  border-bottom py-3'>
      <div className='details'>
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      <div className='w-25 price'>
          {price}
      </div>
    </Row>
  )
}

export default ProductCard