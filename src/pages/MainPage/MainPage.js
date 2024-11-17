import './mainPage.scss';
import { NavLink } from 'react-router-dom';

//images
import promo from './images/promo.svg';
import advantages from './images/advantages.png';
import benefits from './images/benefits.svg';
import certificate from './images/certificate.png';
import br1 from './images/br1.svg';
import br2 from './images/br2.svg';
import br3 from './images/br3.svg';
import btn1 from './images/benefits/btn1.svg'; 
import btn2 from './images/benefits/btn2.svg'; 
import btn3 from './images/benefits/btn3.svg'; 
import btn4 from './images/benefits/btn4.svg'; 

//components
import CourseItem from '../../components/CourseItem/CourseItem';
import EventItem from '../../components/EventItem/EventItem';
import TutorItem from '../../components/TutorItem/TutorItem';
import ReviewItem from '../../components/ReviewItem/ReviewItem';
import BlogItem from '../../components/BlogItem/BlogItem';


const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    <div className="promo-info">
                        <h1 className="promo-info__title">Enjoy studying with Createx Online Courses</h1>
                        <div className="promo-info__buttons">
                            <button className="promo-info__btn orange-btn">About us</button>
                            <button className="promo-info__btn orange-btn">Explore courses</button>
                        </div>
                    </div>

                    <div className="promo-media"><img src={promo} alt="" className="promo-media__img" /></div>
                </div>

                <div className="promo-numbers">
                    <div className="promo-numbers__item">
                        <p className="promo-numbers__item-num">1200</p>
                        <p className="promo-numbers__item-descr">Students graduated</p>
                    </div>
                    <div className="promo-numbers__item">
                        <p className="promo-numbers__item-num">84</p>
                        <p className="promo-numbers__item-descr">Completed courses</p>
                    </div>
                    <div className="promo-numbers__item">
                        <p className="promo-numbers__item-num">16</p>
                        <p className="promo-numbers__item-descr">Qualified tutors</p>
                    </div>
                    <div className="promo-numbers__item">
                        <p className="promo-numbers__item-num">5</p>
                        <p className="promo-numbers__item-descr">Years of experience</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="advantages">
            <div className="container">
                <div className="advantages__inner">
                    <div className="advantages-media">
                        <img src={advantages} alt="" className="advantages-media__img" />
                    </div>
                    <div className="advantages-info">
                        <h6 className="section-subtitle">Who we are</h6>
                        <h2 className="section-title">Why Createx?</h2>
                        <ul className="advantages-list">
                            <li className="advantages-list__item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li className="advantages-list__item">Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li className="advantages-list__item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li className="advantages-list__item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li className="advantages-list__item">Tincidunt sagittis neque sem ac eget.</li>
                            <li className="advantages-list__item">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                        </ul>
                        <NavLink to="/about" className="advantages__button orange-btn">More about us</NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="featured">
            <div className="container">
                <h6 className="section-subtitle">Ready to learn?</h6>
                <h2 className="section-title">Featured Courses</h2>

                <div className="featured__items">
                    <CourseItem></CourseItem>
                    <CourseItem></CourseItem>
                </div>
            </div>
        </section>

        <section className="benefits">
            <div className="container">
                <h6 className="section-subtitle">Our benefits</h6>
                <h2 className="section-title">That’s how we do it</h2>

                <div className="benefits__inner">
                    <div className="benefits__tabs">
                        <button className="benefits__btn active">
                            <img src={btn1} alt="" className="benefits__btn-img" /> Experienced Tutors</button>
                        <button className="benefits__btn">
                            <img src={btn2} alt="" className="benefits__btn-img" /> Feedback & Support</button>
                        <button className="benefits__btn">
                            <img src={btn3} alt="" className="benefits__btn-img" /> 24/7 Online Library</button>
                        <button className="benefits__btn">
                            <img src={btn4} alt="" className="benefits__btn-img" /> Community</button>
                    </div>

                    <div className="benefits__items">
                        <div className="benefits__item active">
                            <div className="benefits__item-info">
                                <h5 className="benefits__item-title item-title">Only practicing tutors</h5>
                                <p className="benefits__item-descr">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                            </div>

                            <div className="benefits__item-media">
                                <img src={benefits} alt="" className="benefits__item-img" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section className="events">
            <div className="container">
                <h6 className="section-subtitle">Our Events</h6>
                <h2 className="section-title">Lectures & workshops</h2>

                <div className="events__list">
                    <EventItem/>
                    <EventItem/>
                    <EventItem/>
                </div>

                <div className="events__link">
                    <p className="events__link-text">Do you want more?</p>
                    <a href="" className="events__link-btn orange-btn">Explore all events</a>
                </div>
            </div>
        </section>

        <section className="certificate">
            <div className="container">
                <div className="certificate__inner">
                    <div className="certificate-info">
                        <h6 className="section-subtitle">Our Events</h6>
                        <h2 className="section-title">Lectures & workshops</h2>

                        <p className="certificate-info__text">We are accredited by international professional organizations and institutes:</p>

                        <div className="brands">
                            <img src={br1} alt="" className="brands__img" />
                            <img src={br2} alt="" className="brands__img" />
                            <img src={br3} alt="" className="brands__img" />
                        </div>
                    </div>
                    <div className="certificate-media"><img src={certificate} alt="" className="certificate-media__img" /></div>
                </div>
            </div>
        </section>

        <section className="team">
            <div className="container">
                <h6 className="section-subtitle">Best tutors are all here</h6>
                <h2 className="section-title">Meet our team</h2>

                <div className="team-slider">
                    <div className="team__items">
                        <TutorItem/>
                        <TutorItem/>
                        <TutorItem/>
                    </div>
                </div>

                
            </div>
        </section>

        <section className="reviews">
            <div className="container">
                <div className="reviews__inner">
                    <h6 className="section-subtitle">TESTIMONIALS</h6>
                    <h2 className="section-title">What our students say</h2>

                    <div className="reviews-slider">
                        <div className="reviews__items">
                            <ReviewItem/>
                        </div>

                        <div className="reviews__buttons">
                            <button className="reviews__btn active"></button>
                            <button className="reviews__btn"></button>
                            <button className="reviews__btn"></button>
                            <button className="reviews__btn"></button>
                            <button className="reviews__btn"></button>
                        </div>
                    </div>
                </div>
                

                
            </div>
        </section>

        <section className="blog">
            <div className="container">
                <div className="blog__inner">
                    <h6 className="section-subtitle">Our blog</h6>
                    <h2 className="section-title">Latest posts</h2>

                    <a href="" className="blog__btn orange-btn">Go to blog</a>

                    <div className="blog__items">
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                    </div>
                </div>
                
            </div>
        </section>

        <section className="newsletter">
            <div className="container">
                <div className="newsletter__inner">
                    <h6 className="section-subtitle">Don’t miss anything</h6>
                    <h2 className="section-title">Subscribe to the Createx School announcements</h2>

                    <form action="" className="newsletter-form">
                        <input type="mail" className="newsletter-form__input" placeholder='Your working email'/>
                        <button className="newsletter-form__btn orange-btn">Subscribe</button>
                    </form>
                </div>
                
            </div>
        </section>

        </>
     );
}
 
export default MainPage;