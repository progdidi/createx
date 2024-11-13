import './blogItem.scss';
import example from './example.png';
//types
import video from './icons/video.svg';
import article from './icons/article.svg';
import podcast from './icons/podcast.svg';
//icons
import calendar from './icons/date.svg';
import clock from './icons/duration.svg';


const BlogItem = ({type, img, category, date, duration, title, descr, link}) => {
    return ( 
        <div className="blog-item">
            <div className="blog-item__type">
                <img src={video} alt="" className="blog-item__type-img" />
                <p className="blog-item__type-text">video</p>
            </div>
            <img src={example} alt="" className="blog-item__img" />
            <div className="blog-item__info">
                <div className="blog-item__details">
                    <a href="" className="blog-item__category">Marketing</a>
                    <div className="blog-item__date"> <img src={calendar} alt="" className="blog-item__date-img" /> September 4, 2020</div>
                    <div className="blog-item__duration"><img src={clock} alt="" className="blog-item__duration-img" /> 36 min</div>
                </div>
                <h6 className="blog-item__title item-title">What is traffic arbitrage and does it really make money?</h6>
                <p className="blog-item__descr">Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
                <a href="" className="blog-item__link">Listen</a>
            </div>
        </div>
     );
}
 
export default BlogItem;