import example from './example.png';
import './directionItem.scss';

const DirectionItem = () => {
    return ( 
        <div className="direction-item">
            <img src={example} alt="" className="direction-item__img" />

            <div className="direction-item__info">
                <p className="direction-item__info-title">Marketing</p>
                <p className="direction-item__info-descr">Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                <a href="" className="direction-item__info-link arrow-link">Check courses</a>
            </div>
        </div>
     );
}
 
export default DirectionItem;