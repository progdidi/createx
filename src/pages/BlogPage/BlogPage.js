import './blogPage.scss';

//components
import BlogItem from '../../components/BlogItem/BlogItem';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';

//images
import articles from './images/articles.svg';
import videos from './images/videos.svg';
import podcasts from './images/podcasts.svg';
import SearchForm from '../../components/SearchForm/SearchForm';

const BlogPage = () => {
    return ( 
        <>

            <section className="blog-page">
                <div className="container">
                    <h6 className="section-subtitle">Our blog</h6>
                    <h2 className="section-title">Createx School Journal</h2>

                    <div className="blog-page__filter">
                        <div className="filter__buttons">
                            <button className="blog-filter__btn">All</button>
                            <button className="blog-filter__btn">
                                <img src={articles} alt="" className="blog-filter__btn-img" />
                                Articles
                            </button>
                            <button className="blog-filter__btn">
                                <img src={videos} alt="" className="blog-filter__btn-img" />
                                Videos
                            </button>
                            <button className="blog-filter__btn">
                                <img src={podcasts} alt="" className="blog-filter__btn-img" />
                                Podcasts
                            </button>
                        </div>

                        <label htmlFor="" className="blog-filter__select-label">Blog category
                            <select name="" id="" className="blog-filter__select"> 
                                <option value="" className="blog-filter__select-option">1</option>
                                <option value="" className="blog-filter__select-option">2</option>
                                <option value="" className="blog-filter__select-option">2</option>
                                <option value="" className="blog-filter__select-option"></option>
                            </select>
                        </label>

                        

                        <SearchForm/>
                        
                    </div>

                    <div className="blog-page__items">
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                    </div>
                </div>
            </section>

            <NewsletterSection/>

        </>
     );
}
 
export default BlogPage;