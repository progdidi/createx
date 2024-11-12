import './tutorItem.scss';

import example from './example.png';

const TutorItem = () => {
    return ( 
        <div className="tutor-item">
            <div className="tutor-item__main">
                <img src={example} alt="" className="tutor-item__img" />
            </div>
            <div className="tutor-item__info"></div>
        </div>
     );
}
 
export default TutorItem;