import './reviewsSection.scss';

//components
import PrevBtn from '../PrevBtn/PrevBtn';
import NextBtn from '../NextBtn/NextBtn';
import ReviewItem from "../ReviewItem/ReviewItem";

const ReviewsSection = () => {
    return ( 
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

                    <div className="reviews-slider__buttons slider__buttons">
                        <PrevBtn/>
                        <NextBtn/>
                    </div>
                    
                </div>
            </div>
                

                
            </div>
        </section>
     );
}
 
export default ReviewsSection;