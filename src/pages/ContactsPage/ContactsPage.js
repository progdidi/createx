import './contactsPage.scss';

//images
import chat from './icons/chat.svg';
import phone from './icons/phone.svg';
import address from './icons/address.svg';
import facebook from './icons/facebook.svg';
import inst from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import telegram from './icons/telegram.svg';
import twitter from './icons/twitter.svg';
import youtube from './icons/youTube.svg';
import feedback from './feedback.svg';

const ContactsPage = () => {
    return ( 
        <>
        <section className="contacts-page">
            <div className="container">
                <div className="contacts-page__inner">
                    <div className="contacts-page__info"> 

                        <h6 className="section-subtitle">Contact info</h6>
                        <h2 className="section-title">Get in touch</h2>

                        <div className="contacts__list">
                            <div className="contacts-item">
                                <img src={chat} alt="" className="contacts-item__img" />
                                <p className="contacts-item__text">Talk to us:</p>
                                <a href="" className="contacts-item__link">hello@createx.com</a>
                            </div>
                            <div className="contacts-item">
                                <img src={phone} alt="" className="contacts-item__img" />
                                <p className="contacts-item__text">Call us:</p>
                                <a href="" className="contacts-item__link">(405) 555-0128</a>
                            </div>
                            <div className="contacts-item">
                                <img src={address} alt="" className="contacts-item__img" />
                                <p className="contacts-item__text">Address:</p>
                                <a href="" className="contacts-item__link">2464 Royal Ln. Mesa, New Jersey 45463, USA</a>
                            </div>
                        </div>

                        <div className="contacts-social">
                            <a href="" className="contacts-social__link">
                                <img src={facebook} alt="" className="contacts-social__img" /></a>
                            <a href="" className="contacts-social__link">
                                <img src={twitter} alt="" className="contacts-social__img" />
                            </a>
                            <a href="" className="contacts-social__link">
                                <img src={youtube} alt="" className="contacts-social__img" />
                            </a>
                            <a href="" className="contacts-social__link">
                                <img src={telegram} alt="" className="contacts-social__img" />
                            </a>
                            <a href="" className="contacts-social__link">
                                <img src={inst} alt="" className="contacts-social__img" />
                            </a>
                            <a href="" className="contacts-social__link">
                                <img src={linkedin} alt="" className="contacts-social__img" />
                            </a>
                        </div>
                    
                    </div>
                    <div className="contacts-page__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620118.611123364!2d124.52523825625!3d37.524562499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f894d9cb8c521%3A0xb2cd8d8f5b230c43!2sBig%20Hit%20Music!5e0!3m2!1sen!2sby!4v1732395262275!5m2!1sen!2sby" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="contacts-feedback">
            <div className="container">
                <div className="contacts-feedback__inner">
                    <img src={feedback} alt="" className="contacts-feedback__img" />
                    <div className="contacts-feedback__info">
                        <h6 className="section-subtitle">Any questions?</h6>
                        <h2 className="section-title">Drop us a line</h2>
                    <form action="" className="contacts-feedback__form">
                        <label htmlFor="" className="form-label"> First Name*
                            <input type="text" className="form-input" required  placeholder='Your first name'/>
                        </label>
                        <label htmlFor="" className="form-label"> Last  Name*
                            <input type="text" className="form-input" required placeholder='Your last name'/>
                        </label>
                        <label htmlFor="" className="form-label"> Email*
                            <input type="text" className="form-input" required placeholder='Your working email'/>
                        </label>
                        <label htmlFor="" className="form-label"> Phone
                            <input type="text" className="form-input"  placeholder='Your phone number'/>
                        </label>
                        <label htmlFor="" className="form-label"> Message*
                            <textarea name="" id="" cols="30" rows="10" className="form-text form-input" required placeholder='Your message'></textarea>
                        </label>

                        <div className="div">
                            <label htmlFor="" className="form-label">
                                <input type="checkbox" className="form-label" />
                                I agree to receive communications from Createx Online School
                            </label>

                            <button className="contacts-feedback__form-btn orange-btn">Send message</button>
                        </div>
                        

                        
                    </form>
                    </div>
                </div>
                
                
            </div>
        </section>
        </>
     );
}
 
export default ContactsPage;