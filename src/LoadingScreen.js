import React from 'react'
import loading from './assets/Spinner.gif'

const LoadingScreen = () => {
  return (
    <div style={{minHeight:'540px'}} className="d-flex align-items-center justify-content-center" >
        <img src={loading} width={100} height={100} />
    </div>
  )
}

export default LoadingScreen