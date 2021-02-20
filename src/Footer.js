import React from 'react';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import FooterCopyright from './FooterCopyright';

function Footer() {
    return (
       <div className='footer'>
           <FooterLogo />
           <FooterMenu />
           <FooterCopyright />
       </div> 
    )
}

export default Footer;
