import BlogCard from '../../../components/global/blog-card/BlogCard';
import './index.scss';

const Blogs = () => {

    const columnWidth = {

        lg: 3,
        md: 4,
        sm: 4,
        col: 6
    }

    return (
        <section className='blogs py-5'>

            <div className="container-xxl">

                <h3> Latest Blogs </h3>

                <div className='row justify-content-center'>

                    <BlogCard columnWidth={columnWidth} />
                    <BlogCard columnWidth={columnWidth} />
                    <BlogCard columnWidth={columnWidth} />
                    <BlogCard columnWidth={columnWidth} />

                </div>
            </div>

        </section>
    )
}

export default Blogs;
