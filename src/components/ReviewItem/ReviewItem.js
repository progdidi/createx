import './reviewItem.scss';
import example from './example.png';

const ReviewItem = ({text, img, name, course}) => {
    return ( 
        <div className="review-item">
            <div className="review-item__content">
                <p className="review-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                <div className="review-item__author">
                    <img src={example} alt="" className="review-item__author-img" />
                    <div className="review-item__author-info">
                        <p className="review-item__author-name">Eleanor Pena</p>
                        <p className="review-item__author-course">Position, Course</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
     );
}
 
export default ReviewItem;