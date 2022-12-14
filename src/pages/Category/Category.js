import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Category.css'
import Categories from '../../Categories'
import CategoryCard from '../../components/categoryCard/categoryCard'
import HeaderTitle from '../../components/headerTitle/headerTitle'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'
import Footer from '../../components/Footer/Footer'


const Category = () => {
  const categoriesCards = Categories.map((item) => {
    return (
      <Col lg={6} md={6} className="mt-2" >
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image} />
      </Col>
    )
  })
  return (
    <div>
      <Row className='w-100 mx-auto category-page'>
        <HeaderTitle headerTitle='دسته بندی منو' className="menu-title container mt-3" />

        {categoriesCards}
      </Row>
      <div className='text-center mx-auto mt-5'>
        <Link to='/' className='btn backBtn px-4 py-2 '>بازگشت به قبل
          <img src={arrow} width={20} height={10} />
        </Link>
      </div>
      <div className='w-100'>
        <Footer />
      </div>
    </div>

  )
}

export default Category