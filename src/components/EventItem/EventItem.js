import './eventItem.scss';
import { NavLink } from 'react-router-dom';

const EventItem = ({date, month, start, end, title, category}) => {
    return ( 
        <div className="event-item">
            <p className="event-item__date">{date}</p>
            <div className="event-item__details">
                <h6 className="item-title">{month} </h6>
                <p className="event-item__text">{start} – {end}</p>
            </div>
            <div className="event-item__info">
                <h6 className="item-title">{title}</h6>
                <p className="event-item__text">{category}</p>
            </div>
            <NavLink to="/event" className="event-item__link orange-btn">View more</NavLink>
        </div>
     );
}
 
export default EventItem;