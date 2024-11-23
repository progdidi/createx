import './courseItem.scss';

const CourseItem = ({img, category, title, price, tutor}) => {
    return ( 
        <div className="course-item">
            <img src={img} alt="" className="course-item__img" />
            <div className="course-item__info">
                <p className="course-item__tag">{category}</p>
                <h5 className="course-item__title">{title}</h5>
                <div className="course-item__details">
                    <p className="course-item__price">${price}</p>
                    <p className="course-item__author">by {tutor}</p>
                </div>
            </div>
        </div>
     );
}
 
export default CourseItem;