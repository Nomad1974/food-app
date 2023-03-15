

import './footer.scss';

const Footer = () => {
    return (  
        <footer className='footer'>
            <div className="footer_wrapper">
                <p className="footer_container">
                © {new Date().getFullYear()} SPA App
                </p>
            </div>
        </footer>
    );
}

export default Footer;