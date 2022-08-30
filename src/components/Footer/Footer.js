import React from 'react'
import './Footer.css'
import location from '../../assets/location.svg'
import instagram from '../../assets/instagram.png'
import phone from '../../assets/call.png'

const Footer = () => {
    return (
        <section className=' mt-5 footer py-3 mx-auto    pe-5 '>
            <div className='d-inline-block w-75' >
                <img src={location} className="mx-2 mb-1" width={20} />
                آدرس: تهران، خیابان کارگر شمالی، ...
            </div>
            <div className='d-inline-block icons muted'

                style={{ float: 'left', marginLeft: '20px' }}>
                <a className='d-inline-block mx-2' href='#'
                    tabindex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip"
                >
                    <img src={instagram} width={20} className="d-flex justify-content-end" />
                </a>
                <a className='d-inline-block mx-2 ' href='tel:0919999999'>
                    <img src={phone} width={20} className="d-flex justify-content-end" />
                </a>
            </div>
        </section>
    )
}

export default Footer