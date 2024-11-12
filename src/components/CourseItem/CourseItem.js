import './courseItem.scss';
import example from './image.png';

const CourseItem = ({img, category, title, price, author}) => {
    return ( 
        <div className="course-item">
            <img src={example} alt="" className="course-item__img" />
            <div className="course-item__info">
                <p className="course-item__tag">Marketing</p>
                <h5 className="course-item__title">The Ultimate Google Ads Training Course</h5>
                <div className="course-item__details">
                    <p className="course-item__price">$100</p>
                    <p className="course-item__author">by Jerome Bell</p>
                </div>
            </div>
        </div>
     );
}
 
export default CourseItem;