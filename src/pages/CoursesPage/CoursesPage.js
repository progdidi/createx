import './coursesPage.scss';

//components
import CourseItem from '../../components/CourseItem/CourseItem';
import { courses } from '../../helpers/courses/courses';
import SearchForm from '../../components/SearchForm/SearchForm';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';

//images
import load from './load.svg';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import CertificateSection from '../../components/CertificateSection/CertificateSection';

const CoursesPage = () => {
    return ( 
        <>

        <section className="courses-page">
            <div className="container">
                <h6 className="section-subtitle">Enjoy your studying!</h6>
                <h2 className="section-title">Our online courses</h2>

                <div className="courses-page__inner">
                    <div className="courses-categories">
                        <button className="courses-categories__btn tab__btn active">
                            <p className="courses-categories__btn-text">All</p> 
                            <p className="courses-categories__btn-num">1</p>
                        </button>
                        <button className="courses-categories__btn tab__btn">
                            <p className="courses-categories__btn-text">Marketing</p> 
                            <p className="courses-categories__btn-num">2</p>
                        </button>
                        <button className="courses-categories__btn tab__btn">
                            <p className="courses-categories__btn-text">Management</p> 
                            <p className="courses-categories__btn-num">10</p>
                        </button>
                        <button className="courses-categories__btn tab__btn">
                            <p className="courses-categories__btn-text">HR & Recruting</p> 
                            <p className="courses-categories__btn-num">5</p>
                        </button>
                        <button className="courses-categories__btn tab__btn">
                            <p className="courses-categories__btn-text">Design</p> 
                            <p className="courses-categories__btn-num">1</p>
                        </button>
                        <button className="courses-categories__btn tab__btn">
                            <p className="courses-categories__btn-text">Development</p> 
                            <p className="courses-categories__btn-num">3</p>
                        </button>
                    </div>

                    <SearchForm/>

                    <div className="courses-page__items">
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

                    <button className="courses-page__load-btn">
                        <img src={load} alt="" className="courses-page__load-img" />
                        Load more
                    </button>
                </div>

                

            </div>
        </section>

        <ReviewsSection/>

        <CertificateSection/>

        <NewsletterSection/>
        
        </>
     );
}
 
export default CoursesPage;