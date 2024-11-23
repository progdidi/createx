import './singleArticlePage.scss';

//components
import BlogItem from '../../components/BlogItem/BlogItem';
import TutorItem from '../../components/TutorItem/TutorItem';
import BlogsSection from '../../components/BlogsSection/BlogsSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';

//images
import example from './example.png';
import calendar from './icons/calendar.svg';
import clock from './icons/clock.svg';
import facebook from './icons/facebook.svg';
import twitter from './icons/twitter.svg';
import linkedin from './icons/linkedin.svg';

const SingleArticlePage = () => {
    return ( 
        <>

        <section className="article-page">
            <div className="container">
                <div className="article-page__inner">
                    <div className="article-page__main">
                        <h2 className="section-title">HR statistics: job search,  interviews, hiring and recruiting</h2>
                        <div className="article-info">
                            <p className="article-info__item">
                                <img src={calendar} alt="" className="article-info__item-img" />
                                August 3, 2020
                            </p>
                            <p className="article-info__item">
                                <img src={clock} alt="" className="article-info__item-img" />
                                4 min read
                            </p>

                            <div className="article-share">
                                <a href="" className="article-share__item"><img src={facebook} alt="" className="article-share__item-img" /></a>
                                <a href="" className="article-share__item"><img src={twitter} alt="" className="article-share__item-img" /></a>
                                <a href="" className="article-share__item"><img src={linkedin} alt="" className="article-share__item-img" /></a>
                            </div>
                        </div>

                        <div className="article">
                            <img src={example} alt="" className="article__img" />

                            <p className="article__text bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus neque ipsam ut perferendis obcaecati at magni porro sapiente vero excepturi, itaque voluptatibus necessitatibus quas cupiditate officia iste tempore fugit? Perferendis.</p>

                            <p className="article__text">At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.</p>

                            <p className="article__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa laborum modi, vitae perferendis maiores iure adipisci, cumque, consequatur est ratione quia quod beatae dolorem atque. Tempora, commodi. Amet, nostrum. </p>

                            <blockquote className="article__quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.</blockquote>

                            <p className="article__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa laborum modi, vitae perferendis maiores iure adipisci, cumque, consequatur est ratione quia quod beatae dolorem atque. Tempora, commodi. Amet, nostrum. </p>

                            <ul className="article__list">
                                <li className="article__list-item list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                                <li className="article__list-item list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                                <li className="article__list-item list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                                <li className="article__list-item list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                                <li className="article__list-item list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            </ul>

                            <p className="article__text">Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>

                            <div className="article__tags">
                                <p className="article__tags-text">Tags:</p>
                                <p className="article-tag">#marketing</p>
                                <p className="article-tag">#recruiting</p>
                                <p className="article-tag">#coding</p>
                                <p className="article__tags-text">Share:</p>
                                <div className="article-share">
                                    <a href="" className="article-share__item"><img src={facebook} alt="" className="article-share__item-img" /></a>
                                    <a href="" className="article-share__item"><img src={twitter} alt="" className="article-share__item-img" /></a>
                                    <a href="" className="article-share__item"><img src={linkedin} alt="" className="article-share__item-img" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="article-page__aside">
                        <div className="article-author">
                            <h6 className="article-page__aside-title"></h6>
                            <TutorItem/>
                        </div>

                        <div className="article-tranding">
                            <h6 className="article-page__aside-title"></h6>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                        </div>

                        <div className="article-tags">
                            <h6 className="article-page__aside-title"></h6>
                            <div className="article-tags__items">
                                <p className="article-tag">#marketing</p>
                                <p className="article-tag">#recruiting</p>
                                <p className="article-tag">#coding</p>
                                <p className="article-tag">#learning</p>
                                <p className="article-tag">#HR</p>
                                <p className="article-tag">#self-development</p>
                            </div>
                        </div>
                        
                        
                    </aside>
                </div>
            </div>
        </section>

        <NewsletterSection/>

        <BlogsSection/>
        
        </>
     );
}
 
export default SingleArticlePage;