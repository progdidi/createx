import './playButton.scss';
import play from './play.svg';

const PlayButton = () => {
    return ( 
        <button className="play-btn">
            <img src={play} alt="" className="play-btn__img" />
        </button>
     );
}
 
export default PlayButton;