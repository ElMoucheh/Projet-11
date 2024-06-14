import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import '../assets/navbar.scss';
import { ReactComponent as Logo } from '../assets/img/color/kasa.svg';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <Link to="/" className='lnk_img'>
                <Logo className="logo" />
            </Link>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/" activeclassname="active">Accueil</Link>
                </li>
                <li className={location.pathname === '/a-propos' ? 'active' : ''}>
                    <Link to="/a-propos" activeclassname="active">À Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;