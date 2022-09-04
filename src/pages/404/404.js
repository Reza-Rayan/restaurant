import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'

const Page404 = () => {

  return (
    <div className='text-center d-flex justify-content-center align-items-center' style={{ height: '700px' }}>

      <div>
        <span className='text404'>صفحه مورد نظر یافت نشد!</span>
        <Link to='/' className='btn d-block mt-4 w-75 mx-auto' style={{ background: '#665573' }}>بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  )
}

export default Page404