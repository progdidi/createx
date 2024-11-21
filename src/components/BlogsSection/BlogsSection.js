import './blogsSection.scss';

import BlogItem from '../BlogItem/BlogItem';

const BlogsSection = () => {
    return ( 
        <section className="blog">
            <div className="container">
                <div className="blog__inner">
                    <h6 className="section-subtitle">Our blog</h6>
                    <h2 className="section-title">Latest posts</h2>

                    <a href="" className="blog__btn orange-btn">Go to blog</a>

                    <div className="blog__items">
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                    </div>
                </div>
                
            </div>
        </section>
     );
}
 
export default BlogsSection;