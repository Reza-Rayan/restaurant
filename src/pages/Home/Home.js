import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
//adding image
import humberger from '../../assets/image.png'
import logo from '../../assets/logo.png'

const Home = () => {
    return (
        <Container>
            <Row className='w-100 home d-flex  mx-auto my-auto container py-5'>
                <Col lg={5} md={5} xs={0} sm={0} >
                    <Image src={humberger} width={450} className="hum-img mx-auto d-flex justify-content-center" />
                </Col>
                <Col lg={7} md={7} xs={0} sm={0} className="container mt-5 ">
                    <img src={logo} className="d-inline-block" width={60} />
                    <h2 className='title d-inline-block'>رستوران گوجه</h2>
                    <p className='text-data'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    </p>
                    <Link to='/categories' className='btn  d-inline-block text-light goto-menu px-4 py-2'>مشاهده منو</Link>
                    <Link to='/categories' className='btn me-5 d-inline-block text-light goto-contact px-4 py-2'> درباره ما بدانید</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home