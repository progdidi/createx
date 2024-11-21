import './aboutPage.scss';

//components
import DirectionItem from '../../components/DirectionItem/DirectionItem';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import TutorItem from '../../components/TutorItem/TutorItem';
import BlogsSection from '../../components/BlogsSection/BlogsSection';

//images
import aboutImg from './images/about.svg';
import processImg from './images/process.svg';
import numbersImg from './images/numbers.png';
import val1 from './images/val1.svg';
import val2 from './images/val2.svg';
import val3 from './images/val3.svg';
import val4 from './images/val4.svg';




const AboutPage = () => {
    return ( 
        <>
            <section className="about-page">
                <div className="container">
                    <div className="about-page__inner">
                        <div className="about-page__info">
                            <h6 className="section-subtitle">About us</h6>
                            <h2 className="section-title">Createx Online School</h2>

                            <div className="about-page__info-text bold">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</div>
                            <div className="about-page__info-text">We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</div>

                            <div className="about-page__buttons">
                                <button className="about-page__btn orange-btn">Explore events</button>
                                <button className="about-page__btn orange-btn">Browse courses</button>
                            </div>
                        </div>
                        <img src={aboutImg} alt="" className="about-page__img" />
                    </div>
                </div>
            </section>

            <section className="about-numbers">
                <div className="container">
                    <div className="about-numbers__inner">
                        <div className="about-numbers__media">
                            <video src="">ddf</video>
                            <img src={numbersImg} alt="" className="about-numbers__img" />
                        </div>
                        

                        <ul className="about-numbers__list">
                            <l className="about-numbers__list-item"><span>1200</span> students graduated</l>
                            <l className="about-numbers__list-item"><span>84</span>completed courses</l>
                            <l className="about-numbers__list-item"><span>16</span>qualified tutors</l>
                            <l className="about-numbers__list-item"><span>5</span>years of experience</l>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="values">
                <div className="container">
                    <h6 className="section-subtitle">We always stand for</h6>
                    <h2 className="section-title">Our core values</h2>

                    <div className="values__items">
                        <div className="values__item">
                            <img src={val1} alt="" className="values__item-img" />
                            <h6 className="values__item-title">Structured Approach</h6>
                            <p className="values__item-descr">Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                        </div>
                        <div className="values__item">
                            <img src={val2} alt="" className="values__item-img" />
                            <h6 className="values__item-title">Professional Feedbacks</h6>
                            <p className="values__item-descr">Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
                        </div>
                        <div className="values__item">
                            <img src={val3} alt="" className="values__item-img" />
                            <h6 className="values__item-title">Efficiency</h6>
                            <p className="values__item-descr">Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
                        </div>
                        <div className="values__item">
                            <img src={val4} alt="" className="values__item-img" />
                            <h6 className="values__item-title">Flexible Shedule</h6>
                            <p className="values__item-descr">Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="directions">
                <div className="container">
                    <h6 className="section-subtitle">our main directions</h6>
                    <h2 className="section-title">What do we teach</h2>

                    <div className="directions__items">
                        <DirectionItem/>
                        <DirectionItem/>
                        <DirectionItem/>
                        <DirectionItem/>
                    </div>
                </div>
            </section>

            <div className="about-process">
                <div className="container">
                    <div className="about-process__inner">
                        <div className="about-process__info">
                            <h6 className="section-subtitle">Studying process</h6>
                            <h2 className="section-title">That’s how we do it</h2>

                            <div className="about-process__steps">
                                <div className="about-process__step">
                                    <p className="about-process__step-subtitle">Step 1</p>
                                    <h6 className="about-process__step-title">Watching online video lectures</h6>
                                    <p className="about-process__step-text">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
                                </div>
                                <div className="about-process__step">
                                    <p className="about-process__step-subtitle">Step 2</p>
                                    <h6 className="about-process__step-title">Passing test</h6>
                                    <p className="about-process__step-text">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
                                </div>
                                <div className="about-process__step">
                                    <p className="about-process__step-subtitle">Step 3</p>
                                    <h6 className="about-process__step-title">Curator’s feedback</h6>
                                    <p className="about-process__step-text">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
                                </div>
                                <div className="about-process__step">
                                    <p className="about-process__step-subtitle">Step 4</p>
                                    <h6 className="about-process__step-title">Corrections if needed</h6>
                                    <p className="about-process__step-text"></p>
                                </div>
                            </div>
                        </div>

                        <div className="about-process__media"><img src={processImg} alt="" className="about-process__media-img" /></div>
                        
                    </div>
                </div>
            </div>

            <section className="best-tutors">
                <div className="container">
                    <h6 className="section-subtitle"></h6>
                    <h2 className="section-title"></h2>

                    <div className="best-tutors__inner">
                        <TutorItem/>
                        <TutorItem/>
                        <TutorItem/>
                        <TutorItem/>
                    </div>
                </div>
            </section>

            <ReviewsSection/>

            <section className="jobs">
                <div className="container">
                    <h6 className="section-subtitle"></h6>
                    <h2 className="section-title"></h2>

                    <div className="jobs__inner">
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                        <div className="jobs__item"><img src="" alt="" className="jobs__item-img" /></div>
                    </div>
                </div>
            </section>

            <BlogsSection/>

            <NewsletterSection/>
        </>
     );
}
 
export default AboutPage;