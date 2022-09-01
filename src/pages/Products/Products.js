import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Categories from '../../Categories';
import ProductCard from '../../components/productCard/ProductCard';
import Footer from '../../components/Footer/Footer'
//adding icon
import back from '../../assets/arrow.svg'

const Products = () => {
    const { name } = useParams();
    let products = Categories.find((index) => index.name === name)

    let prodctCard = products.sub.map((item) => {
        return <ProductCard
            title={item.sub_name}
            description={item.description}
            price={item.price}
            key={item.sub_id}
        />
    })

    return (
        <div>
            <div className='container'>

                <div className='mt-4'>
                    {prodctCard}
                </div>

                <div className='d-flex justify-content-center' >
                    <Link to='/categories' className='btn text-center backBtn px-5 mx-auto mt-5 text-center' >
                        بازگشت
                        <img src={back} width={20} height={12} className="me-1" />
                        </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products