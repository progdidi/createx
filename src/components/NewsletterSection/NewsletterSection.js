import './newsletterSection.scss';

const NewsletterSection = () => {
    return ( 
        <section className="newsletter">
            <div className="container">
                <div className="newsletter__inner">
                    <h6 className="section-subtitle">Don’t miss anything</h6>
                    <h2 className="section-title">Subscribe to the Createx School announcements</h2>

                    <form action="" className="newsletter-form">
                        <input type="email" className="newsletter-form__input" placeholder='Your working email'/>
                        <button className="newsletter-form__btn orange-btn">Subscribe</button>
                    </form>
                </div>
                
            </div>
        </section>
     );
}
 
export default NewsletterSection;