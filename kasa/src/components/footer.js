import React from 'react';
import '../assets/footer.scss';
import { ReactComponent as Logo } from '../assets/img/white/kasa.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <Logo className="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;