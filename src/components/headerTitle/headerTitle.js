import React from 'react'
import './headerTitle.css'
import titleIcon from '../../assets/bars-solid.svg'

const headerTitle = ({ headerTitle }) => {
    return (
        <div className=' header-title text-center mt-3 py-3 '> 
            <h1 >
                <img src={titleIcon} width={20} className="mx-2" />
                {headerTitle}
            </h1>
        </div>

    )
}

export default headerTitle