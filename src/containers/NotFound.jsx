import React from 'react'
import NotFoundLogo from '../assets/images/404.svg';
import '../assets/styles/components/NotFound.scss';

const NotFound = ()=>(
    <div className="NotFound__container">
        <div className="NotFound__container-image">
            <img src={NotFoundLogo} alt=""/>
        </div>
    </div>
)
export default NotFound;