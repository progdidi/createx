import './tutorItem.scss';

//images
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import example from './example.png';

const TutorItem = ({img, fbLink, instLink, lnkdLink, name, job}) => {
    return ( 
        <div className="tutor-item">
            <div className="tutor-item__main">
                <img src={example} alt="" className="tutor-item__img" />
                <div className="tutor-item__overlay">
                    <ul className="tutor-social__list">
                        <li className="tutor-social__list-item"><a href="" className="tutor-social__list-link"><img src={facebook} alt="" className="tutor-social__list-img" /></a></li>
                        <li className="tutor-social__list-item"><a href="" className="tutor-social__list-link"><img src={instagram} alt="" className="tutor-social__list-img" /></a></li>
                        <li className="tutor-social__list-item"><a href="" className="tutor-social__list-link"><img src={linkedin} alt="" className="tutor-social__list-img" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="tutor-item__info">
                <p className="tutor-item__info-name">Dianne Russell</p>
                <p className="tutor-item__info-job">Founder and CEO</p>
            </div>
        </div>
     );
}
 
export default TutorItem;