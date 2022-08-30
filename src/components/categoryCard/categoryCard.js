import React from 'react'
import './categoryCard.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({ image, name, price, productsLinks }) => {
    return (
        <Row className='categoryCard mt-3 p-2  mx-auto'>

            <Col>
                <Link to={`/categories/${name}`}>
                    <h3 >{name}</h3>
                    <span>{price}</span>
                </Link>
            </Col>

            <Col>
                <Link to={`/categories/${name}`} className='d-flex justify-content-center'>
                    <img src={image} width={80} height={80} />
                </Link>
            </Col>
        </Row>
    )
}

export default CategoryCard