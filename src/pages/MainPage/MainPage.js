import './mainPage.scss';
import { NavLink } from 'react-router-dom';

//images
import promo from './images/promo.svg';
import advantages from './images/advantages.png';
import benefits from './images/benefits.svg';
import btn1 from './images/benefits/btn1.svg'; 
import btn2 from './images/benefits/btn2.svg'; 
import btn3 from './images/benefits/btn3.svg'; 
import btn4 from './images/benefits/btn4.svg'; 

//components
import CourseItem from '../../components/CourseItem/CourseItem';
import {courses} from '../../helpers/courses/courses';
import EventItem from '../../components/EventItem/EventItem';
import { events } from '../../helpers/events';
import TutorItem from '../../components/TutorItem/TutorItem';
import {tutors} from '../../helpers/courses/tutors/tutors';
import NextBtn from '../../components/NextBtn/NextBtn';
import PrevBtn from '../../components/PrevBtn/PrevBtn';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import CertificateSection from '../../components/CertificateSection/CertificateSection';
import BlogsSection from '../../components/BlogsSection/BlogsSection';
import PlayButton from '../../components/PlayButton/PlayButton';


const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    <div className="promo-info">
                        <div className="promo-video">
                            <PlayButton/> 
                            <p className="promo-video__text">Play showreel</p>
                        </div>
                        <h1 className="promo-info__title">Enjoy studying with Createx Online Courses</h1>
                        <div className="promo-info__buttons">
                            <button className="promo-info__btn main-btn">About us</button>
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
                            <li className="advantages-list__item list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li className="advantages-list__item list-item">Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li className="advantages-list__item list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li className="advantages-list__item list-item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li className="advantages-list__item list-item">Tincidunt sagittis neque sem ac eget.</li>
                            <li className="advantages-list__item list-item">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                        </ul>
                        <NavLink to="/about" className="advantages__button orange-btn">More about us</NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="featured">
            <div className="container">
                <div className="section-top">
                    <div>
                        <h6 className="section-subtitle">Ready to learn?</h6>
                        <h2 className="section-title">Featured Courses</h2>
                    </div>

                    <NavLink to="/courses" className="featured__link main-btn">View all courses</NavLink>
                    
                </div>
                

                

                <div className="featured__items">
                    {courses.map((course) => {
                        return (
                            <CourseItem
                                title={course.title}
                                img={course.img}
                                category={course.category}
                                price={course.price}
                                tutor={course.tutor}
                                key={course.id}
                            />
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="benefits">
            <div className="container">
                <h6 className="section-subtitle">Our benefits</h6>
                <h2 className="section-title">That’s how we do it</h2>

                <div className="benefits__inner">
                    <div className="benefits__tabs">
                        <button className="benefits__btn  tab__btn active">
                            <img src={btn1} alt="" className="benefits__btn-img" /> Experienced Tutors</button>
                        <button className="benefits__btn tab__btn ">
                            <img src={btn2} alt="" className="benefits__btn-img" /> Feedback & Support</button>
                        <button className="benefits__btn tab__btn ">
                            <img src={btn3} alt="" className="benefits__btn-img" /> 24/7 Online Library</button>
                        <button className="benefits__btn tab__btn ">
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

                <div className="events__link">
                    <p className="events__link-text">Do you want more?</p>
                    <NavLink to="/events" className="events__link-btn orange-btn">Explore all events</NavLink>
                </div>
            </div>
        </section>

       <CertificateSection/>

        <section className="team">
            <div className="container">
                <div className="team__inner">
                    <h6 className="section-subtitle">Best tutors are all here</h6>
                    <h2 className="section-title">Meet our team</h2>

                    <div className="team-slider">
                        <div className="team__items">

                            {tutors.slice(0, 4).map((tutor) => {
                                return (
                                    <TutorItem
                                        name={tutor.name}
                                        img={tutor.img}
                                        job={tutor.job}
                                        fbLink={tutor.fbLink}
                                        instLink={tutor.instLink}
                                        linkedinLink={tutor.linkedinLink}
                                        key={tutor.id}
                                    />
                                )
                            })}


                        </div>

                        <div className="slider__buttons team-slider__buttons">
                            <PrevBtn/>
                            <NextBtn/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        <ReviewsSection/>

        <BlogsSection/>

        <NewsletterSection/>

        </>
     );
}
 
export default MainPage;