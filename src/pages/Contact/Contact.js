import React from 'react'
import './Contact.css'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'
import { Row, Col } from 'react-bootstrap'
//adding icon
import phone from '../../assets/call.png'

const Contact = () => {
  return (
    <div className=' mt-3'>
      <div className='container p-3'>
        <h1 className='head-title'>
          <span >ارتباط با ما </span>
        </h1>
        <p>
          فعالیت ما بر اساس مشتری مداری و کیفیت بود و در این جهت با تلاش زیاد توانستیم پله های ترقی را برای بهتر شدن پشت سر بذاریم دراین ۷ سال پیشرفت قابل توجهی داشتیم تا برند گوجه را در منطقه باهمراهی مردم به ثبت برسانیم
          و اکنون در این جایگاه در حال خدمت رسانی هستیم
        </p>
        <Row className='mt-4'>
          <Col xl={6} md={6} sm={12} xs={12} >
            <div className='location'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.3815838033065!2d51.81587651526047!3d35.741424780180274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28b271b2f78c06d5!2zMzXCsDQ0JzI5LjEiTiA1McKwNDknMDUuMCJF!5e0!3m2!1sen!2s!4v1662441413096!5m2!1sen!2s"
                height="200" width="300" title="Iframe Example"></iframe>
            </div>
          </Col>
          <Col xl={6} md={6} sm={12} xs={12} >
            <h2 className='head-phone' style={{'color':'#FDB361'}}>شماره های تماس:</h2>
            <section className='contact-phone'>
              <div className='mt-4 border-bottom pb-3'>
                <img src={phone} className="d-inline-block mb-1" />
                <a href='tel:02176493800' className='me-2 '>021-۷۶۴۹۳۸۰۰</a>
              </div>
              <div className='mt-4 border-bottom pb-3'>
                <img src={phone} className="d-inline-block mb-1" />
                <a href='tel:021۷۶۴۹۳۹۰۰' className='me-2 '>021-۷۶۴۹۳۹۰۰</a>
              </div>
              <div className='mt-4 border-bottom pb-3'>
                <img src={phone} className="d-inline-block mb-1" />
                <a href='tel:021۷۶۲۹۰۰۶۳' className='me-2 '>021-۷۶۲۹۰۰۶۳</a>
              </div>
              <div className='mt-4 border-bottom pb-3'>
                <img src={phone} className="d-inline-block mb-1" />
                <a href='tel:021۷۶۲۹۳۷۴۷' className='me-2 '>021-۷۶۲۹۳۷۴۷</a>
              </div>
            </section>
          </Col>
        </Row>
        <div className='text-center mx-auto mt-5'>
          <Link to='/' className='btn backBtn px-4 py-2 '>
            بازگشت به قبل
            <img src={arrow} width={20} height={10} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact