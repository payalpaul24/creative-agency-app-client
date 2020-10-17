import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import OurPartnerLogo from '../OurPartnerLogo/OurPartnerLogo';
import './Header.css';

const Header = () => {
    return (
        <div className="header-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <OurPartnerLogo></OurPartnerLogo>
        </div>
    );
};

export default Header;