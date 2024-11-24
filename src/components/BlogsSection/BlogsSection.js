import './blogsSection.scss';

import BlogItem from '../BlogItem/BlogItem';
import { blogs } from '../../helpers/blogs/blogs';

const BlogsSection = () => {
    return ( 
        <section className="blog">
            <div className="container">
                <div className="blog__inner">
                    <h6 className="section-subtitle">Our blog</h6>
                    <h2 className="section-title">Latest posts</h2>

                    <a href="" className="blog__btn orange-btn">Go to blog</a>

                    <div className="blog__items">

                        {blogs.map((blog) => {
                            return (
                                <BlogItem
                                    title={blog.title}
                                    img={blog.img}
                                    descr={blog.descr}
                                    type={blog.type}
                                    category={blog.category}
                                    date={blog.date}
                                    time={blog.time}
                                    key={blog.id}
                                />
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </section>
     );
}
 
export default BlogsSection;