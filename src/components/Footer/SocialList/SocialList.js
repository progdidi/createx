import './socialList.scss';

//imgaes
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import linkedIn from './images/linkedIn.svg';
import telegram from './images/telegram.svg';
import twitter from './images/twitter.svg';
import youTube from './images/youTube.svg';

const SocialList = () => {
    return ( 
        <ul className="social-list">
            <li className="social-list__item"><a href="" className="social-list__link"><img src={facebook} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={twitter} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={youTube} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={telegram} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={instagram} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={linkedIn} alt="" className="social-list__img" /></a></li>
        </ul>
     );
}
 
export default SocialList;