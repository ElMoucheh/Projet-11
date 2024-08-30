import React from 'react';
import '../assets/components/footer.scss';
import { ReactComponent as Logo } from '../assets/img/white/kasa.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <Logo className="logo"/>
            <div className='txt_footer'>
                <p>© 2020 Kasa.</p>
                <p>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;