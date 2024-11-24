import './blogItem.scss';
import { NavLink } from 'react-router-dom';
//types
import video from './icons/video.svg';
import article from './icons/article.svg';
import podcast from './icons/podcast.svg';
//icons
import calendar from './icons/date.svg';
import clock from './icons/duration.svg';


const BlogItem = ({type, img, category, date, time, title, descr}) => {
    return ( 
        <NavLink to="/article" className="blog-item">
            <div className="blog-item__type">
                <img src={video} alt="" className="blog-item__type-img" />
                <p className="blog-item__type-text">{type}</p>
            </div>
            <img src={img} alt="" className="blog-item__img" />
            <div className="blog-item__info">
                <div className="blog-item__details">
                    <a href="" className="blog-item__category">{category}</a>
                    <div className="blog-item__date"> <img src={calendar} alt="" className="blog-item__date-img" /> {date}</div>
                    <div className="blog-item__duration"><img src={clock} alt="" className="blog-item__duration-img" /> {time}</div>
                </div>
                <h6 className="blog-item__title item-title">{title}</h6>
                <p className="blog-item__descr">{descr}</p>
                <NavLink to="/article" className="blog-item__link">Listen</NavLink>
            </div>
        </NavLink>
     );
}
 
export default BlogItem;