import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='text-center d-flex justify-content-center align-items-center' style={{height:'700px'}}> 
        <h1>صفحه مورد نظر یافت نشد!</h1>
        <br/>
        <Link to='/' className='btn btn-outline-primary d-block'>بازگشت به صفحه اصلی</Link>
          </div>
  )
}

export default Page404