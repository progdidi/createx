import './singleCoursePage.scss';

//components
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import CourseItem from '../../components/CourseItem/CourseItem';

//images
import example from './example.png';
import rate from './icons/rate.svg';
import video from './icons/video.svg';
import students from './icons/student.svg';
import facebook from './icons/social/facebook.svg';
import behance from './icons/social/behance.svg';
import twitter from './icons/social/twitter.svg';
import linkedin from './icons/social/linkedin.svg';
import program from './program.svg';
import register from './register.svg';
import NextBtn from '../../components/NextBtn/NextBtn';
import PrevBtn from '../../components/PrevBtn/PrevBtn';

const SingleCoursePage = () => {
    return ( 
        <>
        <section className="single-course__title">
            <div className="container">
                <h6 className="section-subtitle">course</h6>
                <h2 className="section-title">User Experience. Principles of Human-Centered Design</h2>
            </div>
           
        </section>

        <section className="course-about">
            <div className="container">
                <div className="course-about__inner">
                    <div className="course-info">
                        <h2 className="course-info__title section-title">About the course</h2>

                        <p className="course-info__descr">Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque</p>


                        <h5 className="course-info__subtitle">You will learn:</h5>
                        <ul className="course-info__list">
                            <li className="course-info__list-item list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li className="course-info__list-item list-item">Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li className="course-info__list-item list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li className="course-info__list-item list-item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li className="course-info__list-item list-item">Fringilla in nec risus congue venenatis pretium posuere nec.</li>
                            <li className="course-info__list-item list-item">Cursus eu pretium, vulputate tempus quam massa sed at.</li>
                        </ul>
                    </div>

                    <div className="course-main">
                        <div className="course-main__item">
                            <h6 className="course-main__item-subtitle">Dates</h6>
                            <h5 className="course-main__item-title">Sept 7 – Nov 2</h5>
                            <p className="course-main__item-text">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                        </div>
                        <div className="course-main__item">
                            <h6 className="course-main__item-subtitle">Duration</h6>
                            <h5 className="course-main__item-title">2 months – 8 lessons</h5>
                            <p className="course-main__item-text">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
                        </div>
                        <div className="course-main__item">
                            <h6 className="course-main__item-subtitle">Price</h6>
                            <h5 className="course-main__item-title">$120 per month</h5>
                            <p className="course-main__item-text">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                        </div>

                        <button className="course-main__btn orange-btn">Join the course</button>

                    </div>
                </div>
            </div>

            
        </section>

        <section className="course-curator">
            <div className="container">
                <div className="course-curator__inner">
                    <img src={example} alt="" className="course-curator__img" />

                    <div className="course-curator__info">
                        <h6 className="section-subtitle">Course curator</h6>
                        <h2 className="section-title">Cody Fisher</h2>

                        <p className="course-curator__job">Senior UX designer in IT Product Company</p>

                        <ul className="course-curator__numbers">
                            <li className="course-curator__numbers-item"><img src={rate} alt="" className="course-curator__numbers-img" />4.9 rate</li>
                            <li className="course-curator__numbers-item"><img src={video} alt="" className="course-curator__numbers-img" />4 courses</li>
                            <li className="course-curator__numbers-item"><img src={students} alt="" className="course-curator__numbers-img" />350 students</li>
                        </ul>

                        <p className="course-curator__about">Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. </p>

                        <ul className="course-curator__social">
                            <li className="course-curator__social-item">
                                <li className="course-curator__social-link"><img src={facebook} alt="" className="course-curator__social-img" /></li>
                            </li>
                            <li className="course-curator__social-item">
                                <li className="course-curator__social-link"><img src={behance} alt="" className="course-curator__social-img" /></li>
                            </li>
                            <li className="course-curator__social-item">
                                <li className="course-curator__social-link"><img src={twitter} alt="" className="course-curator__social-img" /></li>
                            </li>
                            <li className="course-curator__social-item">
                                <li className="course-curator__social-link"><img src={linkedin} alt="" className="course-curator__social-img" /></li>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </section>

        <section className="learning-process">
            <div className="container">
                <h6 className="section-subtitle">Main steps</h6>
                <h2 className="section-title">Online learning process</h2>

                <div className="learning-process__inner">
                    <div className="learning-process__item">
                        <p className="learning-process__item-num">01</p>
                        <h6 className="learning-process__item-title">Watching online video lectures</h6>
                        <p className="learning-process__item-descr">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </div>
                    <div className="learning-process__item">
                        <p className="learning-process__item-num">02</p>
                        <h6 className="learning-process__item-title">Passing test</h6>
                        <p className="learning-process__item-descr">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.</p>
                    </div>
                    <div className="learning-process__item">
                        <p className="learning-process__item-num">03</p>
                        <h6 className="learning-process__item-title">Curator’s feedback</h6>
                        <p className="learning-process__item-descr">Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.</p>
                    </div>
                    <div className="learning-process__item">
                        <p className="learning-process__item-num">04</p>
                        <h6 className="learning-process__item-title">Corrections if needed</h6>
                        <p className="learning-process__item-descr">Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="discount">
            <div className="container">
                <div className="discount__inner">
                    <h5 className="discount__title">20% discount for early birds!</h5>
                    <div className="discount-timer">
                        <div className="discount-timer__item">
                            <p className="discount-timer__num">06</p>
                            <p className="discount-timer__text">Days</p>
                        </div>
                        <div className="discount-timer__item">
                            <p className="discount-timer__num">15</p>
                            <p className="discount-timer__text">Hours</p>
                        </div>
                        <div className="discount-timer__item">
                            <p className="discount-timer__num">55</p>
                            <p className="discount-timer__text">Mins</p>
                        </div>
                        <div className="discount-timer__item">
                            <p className="discount-timer__num">02</p>
                            <p className="discount-timer__text">Secs</p>
                        </div>
                    </div>

                    <form action="" className="discount-form">
                        <label htmlFor="" className="discount-form-label">Full name
                            <input type="text" className="discount-form__input" placeholder='Your full name'/>
                        </label>
                        <label htmlFor="" className="discount-form-label">Email
                            <input type="text" className="discount-form__input" placeholder='Your working email'/>
                        </label>
                        <label htmlFor="" className="discount-form-label">Phone
                            <input type="text" className="discount-form__input" placeholder='Your phone number'/>
                        </label>
                        <button className="discount-form__btn orange-btn">Join the course</button>
                    </form>
                </div>
            </div>
        </section>

        <section className="course-whom">
            <div className="container">
                <div className="course-whom__inner">
                    <div className="course-whom__title">
                        <h6 className="section-subtitle">For whom?</h6>
                        <h2 className="section-title">Who will benefit from the course:</h2>
                    </div>
                    

                    <ul className="course-whom__list">
                        <li className="course-whom__list-item list-item">Specialists with more than 1 year of active work experience</li>
                        <li className="course-whom__list-item list-item">Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</li>
                        <li className="course-whom__list-item list-item">Professional designers who want to feel more confident in UX</li>
                        <li className="course-whom__list-item list-item">Specialists who would like to structure their knowledge, fill in the gaps</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="course-program">
            <div className="container">
                <div className="course-program__inner">
                    <div className="course-program__info">
                        <h6 className="section-subtitle">Course program</h6>
                        <h2 className="section-title">What will you learn</h2>

                        <div className="course-program__list">
                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 1.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 2.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 3.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 4.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 5.</span> Massa vel arcu mauris, id vel rhoncus mattis quis.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 6.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 7.</span> Massa vel arcu mauris, id vel rhoncus mattis quis.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>

                            <div className="details-item">
                                <button className="details-item__btn">+
                                    <h6 className="details-item__title"><span>Lesson 8.</span> Aliquet lectus urna viverra in odio.</h6>
                                </button>
                                <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                            </div>
                        </div>
                    </div>

                    <div className="course-program__media">
                    <img src={program} alt="" className="course-program__media-img" />
                </div>
                </div>
               
            </div>
        </section>

        <ReviewsSection/>

        <section className="register">
            <div className="container">
                <div className="register__inner">
                    <div className="register__media"><img src={register} alt="" className="register__media-img" /></div>

                    <div className="register__info">
                        <h6 className="section-subtitle">Leave a request now and get 20% off!</h6>
                        <h2 className="section-title">Register for the course</h2>

                        <form action="" className="register-form">
                            <label htmlFor="" className="register-form__label">Full Name
                                <input type="text" className="register-form__input" placeholder='Your full name'/>
                            </label>
                            <label htmlFor="" className="register-form__label">Email
                                <input type="text" className="register-form__input" placeholder='Your working email'/>
                            </label>
                            <label htmlFor="" className="register-form__label">Phone
                                <input type="text" className="register-form__input" placeholder='Your phone number'/>
                            </label>
                        
                        <button className="register-form__btn orange-btn">Join the course</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="other-courses">
            <div className="container">
                <h6 className="section-subtitle"></h6>
                <h2 className="section-title"></h2>

                <div className="courses-slider">
                    <div className="courses-slider__buttons">
                        <PrevBtn/>
                        <NextBtn/>
                    </div>
                    <div className="courses-slider__items">
                        <CourseItem/>
                        <CourseItem/>
                    </div>

                    <div className="other-courses__more">
                        <p className="other-courses__more-text">Do you want more courses?</p>
                        <button className="other-courses__more-btn orange-btn">View all courses</button>
                    </div>
                </div>
            </div>
        </section>

        </>
     );
}
 
export default SingleCoursePage;