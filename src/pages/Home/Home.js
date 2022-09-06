import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
//adding image
import food from '../../assets/s123.png'
import logo from '../../assets/logo.png'
import bar from '../../assets/bars-solid.svg'
import phone from '../../assets/call.png'

const Home = () => {
    return (
        <Container>
            <Row className='w-100 home d-flex  mx-auto my-auto container py-5'>
                <Col lg={5} md={5} xs={0} sm={0}>
                    <div  className="hum-img" >
                        <Image src={food} width={400} height={400} className=" mx-auto d-flex justify-content-center" />
                    </div>
                </Col>
                <Col lg={7} md={7} xs={0} sm={0} className="container data-container mt-5 ">
                    <img src={logo} className="d-inline-block" width={60} />
                    <h2 className='title d-inline-block'>رستوران گوجه</h2>
                    <p className='text-data '>
                        فعالیت ما بر اساس مشتری مداری و کیفیت بود و در این جهت با تلاش زیاد توانستیم پله های ترقی را برای بهتر شدن پشت سر بذاریم دراین ۷ سال پیشرفت قابل توجهی داشتیم تا برند گوجه را در منطقه باهمراهی مردم به ثبت برسانیم
                        و اکنون در این جایگاه در حال خدمت رسانی هستیم
                    </p>
                    <div  className="hum-img-Rza" >
                        <Image src={food} width={350} height={350} className=" mx-auto d-flex justify-content-center" />
                    </div>

                    <div className='btn-container'>
                        <Link to='/categories' className='btn  d-inline-block text-light goto-menu px-4 py-2'>مشاهده منو
                            <img src={bar} width={14} className="me-2" />
                        </Link>
                        <Link to='/contact-us' className='btn me-5 d-inline-block text-light goto-contact px-4 py-2'> درباره ما بدانید
                            <img src={phone} width={14} className="me-2" />
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Home