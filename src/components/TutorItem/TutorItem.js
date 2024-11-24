import './tutorItem.scss';

//images
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';

const TutorItem = ({img, fbLink, instLink, linkedinLink, name, job}) => {
    return ( 
        <div className="tutor-item">
            <div className="tutor-item__main">
                <img src={img} alt="" className="tutor-item__img" />
                <div className="tutor-item__overlay">
                    <ul className="tutor-social__list">
                        <li className="tutor-social__list-item"><a href={fbLink} className="tutor-social__list-link"><img src={facebook} alt="" className="tutor-social__list-img" /></a></li>
                        <li className="tutor-social__list-item"><a href={instLink} className="tutor-social__list-link"><img src={instagram} alt="" className="tutor-social__list-img" /></a></li>
                        <li className="tutor-social__list-item"><a href={linkedinLink} className="tutor-social__list-link"><img src={linkedin} alt="" className="tutor-social__list-img" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="tutor-item__info">
                <p className="tutor-item__info-name">{name}</p>
                <p className="tutor-item__info-job">{job}</p>
            </div>
        </div>
     );
}
 
export default TutorItem;