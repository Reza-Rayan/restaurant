import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import phone from '../../assets/call.png'

const Footer = () => {
    return (
        <section className=' mt-5 footer py-3 mx-auto    pe-5 '>
            <div className='d-inline-block w-75 message ' >
                برای دیدن لوکیشن رستوران ما 
               <a href='https://maps.google.com/maps?q=35.7414248%2C51.8180652&z=17&hl=en' 
                className='d-inline-block mx-2 click-to-loc' target='_blank'>اینجا</a> 
               کلیک کنید.
            </div>
            <div className='d-inline-block' style={{ float: 'left', marginLeft: '30px' }}>
                <a className='d-inline-block mx-2 w-25 ' href='#'>
                    <img src={instagram} width={20} className="d-flex justify-content-end" />
                </a>
                <a className='instagram w-25 d-inline-block mx-2' href='tel:021۷۶۴۹۳۸۰۰'>
                    <img src={phone} width={20} className="d-flex justify-content-end" />
                </a>
            </div>
        </section>
    )
}

export default Footer