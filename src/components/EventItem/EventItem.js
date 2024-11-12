import './eventItem.scss';

const EventItem = ({day, month, time, title, descr, link}) => {
    return ( 
        <div className="event-item">
            <p className="event-item__date">05</p>
            <div className="event-item__details">
                <h6 className="item-title">August </h6>
                <p className="event-item__text">11:00 – 14:00</p>
            </div>
            <div className="event-item__info">
                <h6 className="item-title">Formation of the organizational structure of the company in the face of uncertainty.</h6>
                <p className="event-item__text">Onine master-class</p>
            </div>
            <a href="" className="event-item__link orange-btn">View more</a>
        </div>
     );
}
 
export default EventItem;