import BlogCard from '../../../components/global/blog-card/BlogCard';
import './index.scss';

const Blogs = () => {
    return (
        <section className='blogs py-5'>

            <div className="container-xxl">

                <h3> Latest Blogs </h3>

                <div className='row'>

                    <BlogCard columnWidth={3} />
                    <BlogCard columnWidth={3} />
                    <BlogCard columnWidth={3} />
                    <BlogCard columnWidth={3} />

                </div>
            </div>

        </section>
    )
}

export default Blogs;
