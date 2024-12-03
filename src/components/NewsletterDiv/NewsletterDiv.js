import './newsletterDiv.scss';
import newsletter from './newsletter.svg';

const NewsletterDiv = () => {
    return ( 
        <div className="newsletter-div">
            <div className="container">
                <div className="newsletter-div__content">
                    <img src={newsletter} alt="" className="newsletter-div__img" />

                    <div className="newsletter-div__info">
                        <h4 className="newsletter-div__title">Don’t want to miss the best events? Subscribe to our newsletter!</h4>
                        <form action="" className="newsletter-div__form">
                            <input type="text" className="newsletter-div__form-input form-input" placeholder="Your working email"/>
                            <button className="newsletter-div__form-btn orange-btn">Subscribe</button>
                        
                            <input type="text" className="newsletter-div__form-check" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewsletterDiv;