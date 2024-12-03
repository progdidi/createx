import './singleEventPage.scss';

import speaker from './speaker.png';
import facebook from '../../images/social/facebook.svg';
import linkedin from '../../images/social/linkedin.svg';
import twitter from '../../images/social/twitter.svg';
import instagram from '../../images/social/instagram.svg';
import request from './request.svg';

//components
import EventItem from '../../components/EventItem/EventItem';
import { events } from '../../helpers/events';

//brands images
import br1 from './brands/br1.svg';
import br2 from './brands/br2.svg';
import br3 from './brands/br3.svg';

const SingleEventPage = () => {
    return ( 
        <>

            <section className="event-page">
                <div className="container">
                    <h6 className="section-subtitle">Online lecture</h6>
                    <h2 className="section-title">Formation of the organizational structure of the company in the face of uncertainty</h2>
                </div>
            </section>

            <section className="event-about">
                <div className="container">
                    <div className="event-about__inner">
                        <div className="event-about__info">
                        <h2 className="section-title">We will talk about:</h2>

                        <div className="event-program__list">
                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Theme 1.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Theme 2.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Theme 3.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Theme 4.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            </div>
                        </div>

                        <div className="event-main main-info">
                            <div className="main-info__item">
                                <h6 className="main-info__item-subtitle">Time</h6>
                                <h5 className="main-info__item-title">August 5, 11:00 – 14:00</h5>
                                <p className="main-info__item-text">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                            </div>
                            <div className="main-info__item">
                                <h6 className="main-info__item-subtitle">Price</h6>
                                <h5 className="main-info__item-title">Free</h5>
                                <p className="main-info__item-text">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
                            </div>

                            <a href="" className="event-main__link">Event on Facebook</a>

                            <button className="main-info__btn orange-btn">Join the event</button>

                        </div>
                    </div>
                </div>
                
            </section>

            <section className="event-speaker">
                <div className="container">
                    <div className="event-speaker__inner">
                        <img src={speaker} alt="" className="event-speaker__img" />

                        <div className="event-speaker__info">
                            <h6 className="section-subtitle">speaker curator</h6>
                            <h2 className="section-title">Cody Fisher</h2>

                            <p className="event-speaker__job">Senior UX designer in IT Product Company</p>

                            

                            <p className="event-speaker__about">Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. </p>

                            <div className="event-speaker__brands">
                                <img src={br1} alt="" className="event-speaker__brands-item" />
                                <img src={br2} alt="" className="event-speaker__brands-item" />
                                <img src={br3} alt="" className="event-speaker__brands-item" />
                            </div>

                            <ul className="event-speaker__social">
                                <li className="event-speaker__social-item">
                                    <li className="event-speaker__social-link"><img src={facebook} alt="" className="event-speaker__social-img" /></li>
                                </li>
                                <li className="event-speaker__social-item">
                                    <li className="event-speaker__social-link"><img src={instagram} alt="" className="event-speaker__social-img" /></li>
                                </li>
                                <li className="event-speaker__social-item">
                                    <li className="event-speaker__social-link"><img src={twitter} alt="" className="event-speaker__social-img" /></li>
                                </li>
                                <li className="event-speaker__social-item">
                                    <li className="event-speaker__social-link"><img src={linkedin} alt="" className="event-speaker__social-img" /></li>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </section>

            <section className="course-whom">
                <div className="container">
                    <div className="course-whom__inner">
                        <div className="course-whom__title">
                            <h6 className="section-subtitle">For whom?</h6>
                            <h2 className="section-title">Who will benefit from the event:</h2>
                        </div>
                        

                        <ul className="course-whom__list">
                            <li className="course-whom__list-item list-item">Specialists with more than 1 year of active work experience</li>
                            <li className="course-whom__list-item list-item">Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</li>
                            <li className="course-whom__list-item list-item">Professional designers who want to feel more confident in UX</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="event-subscribe">
                <div className="container">
                    <img src="" alt="" className="event-subscribe__img" />
                    <div className="event-subscribe__info">
                        <h2 className="section-title">Don’t want to miss the best events? Subscribe to our newsletter!</h2>
                        <form action="" className="event-subscribe__form">
                            <input type="text" className="event-subscribe__form-input" />
                                <button className="event-subscribe__form-btn orange-btn">Subscribe</button>
                            <input type="checkbox" className="event-subscribe__form-input" />
                            
                            </form>
                    </div>
                </div>
            </section>

            <section className="event-request">
                <div className="container">
                    <div className="event-request__inner">                        
                        <form action="" className="event-request__form">
                            <h6 className="section-subtitle">Don’t miss the event</h6>
                            <h2 className="section-title">Leave a request</h2>

                            <label htmlFor="" className="event-request__form-label form-label">
                                <input type="text" className="event-request__form-input form-input" />
                            </label>
                            <label htmlFor="" className="event-request__form-label form-label">
                                <input type="text" className="event-request__form-input form-input" />
                            </label>
                            <label htmlFor="" className="event-request__form-label form-label">
                                <input type="text" className="event-request__form-input form-input" />
                            </label>

                            <button className="event-request__form-btn orange-btn"></button>
                        </form>
                        <img src={request} alt="" className="event-request__img" />
                    </div>
                    
                </div>
            </section>

            <section className="other-events">
                <div className="container">
                    <h6 className="section-subtitle">Check other online events</h6>
                    <h2 className="section-title">You may be interested in</h2>

                    <div className="other-events__items">
                        {events.map((event) => {
                            return (
                                <EventItem
                                    date={event.date}
                                    month={event.month}
                                    start={event.start}
                                    end={event.end}
                                    title={event.title}
                                    category={event.category}
                                    key={event.id}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default SingleEventPage;