import './footer.scss';

import logo from './logo.svg';
import SocialList from './SocialList/SocialList';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer-info">
                        <img src={logo} alt="" className="footer-info__logo" />
                        <p className="footer-info__text">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>

                        <SocialList/>
                    </div>
                    <ul className="footer-list">
                        <h6 className="footer__title">SITE MAP</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__link">About Us</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Courses</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Events</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Blog</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Contacts</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer__title">COURSES</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Marketing</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Management</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">HR & Recruting</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Design</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link">Development</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer__title">CONTACT US</h6>
                        <li className="footer-list__item"><a href="tel:4055550128" className="footer-list__link">(405) 555-0128</a></li>
                        <li className="footer-list__item"><a href="mail:hello@createx.com" className="footer-list__link">hello@createx.com</a></li>
                    </ul>

                    <div className="footer-newsletter">
                        <h6 className="footer__title">SIGN UP TO OUR NEWSLETTER</h6>
                        <input type="text" />

                        <p className="footer-newsletter__descr">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </div>
                </div>

                <div className="footer__bottom"></div>
            </div>
        </footer>
     );
}
 
export default Footer;