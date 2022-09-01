import React from 'react'
import './categoryCard.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//adding icon
import arrow from '../../assets/left-arrow.png'

const CategoryCard = ({ image, name }) => {
    return (
        <Row className='categoryCard mt-3 p-2  mx-auto'>

            <Col>
                <Link to={`/categories/${name}`}>
                    <div>
                        <h3 >{name}</h3>
                        <div className='text-center menu-text'>مشاهده منو
                            <img src={arrow} width={12} className="mx-1" />
                        </div>
                    </div>
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