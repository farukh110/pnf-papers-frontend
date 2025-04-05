import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../../components/global/blog-card/BlogCard';
import './index.scss';
import { useEffect } from 'react';
import { getAllBlogs } from '../../../redux/api/blogs/blogSlice';

const Blogs = () => {

    const columnWidth = {

        lg: 3,
        md: 4,
        sm: 4,
        col: 6
    }

    const dispatch = useDispatch();

    useEffect(() => {

        getAllBlogsList();

    }, []);

    const getAllBlogsList = () => {

        dispatch(getAllBlogs());
    }

    const { isLoading, isError, blogs } = useSelector(state => state.blogs);

    return (
        <section className='blogs py-5'>

            <div className="container-xxl">

                <h3> Latest Blogs </h3>

                <div className='row justify-content-center'>

                    {blogs?.data?.length > 0 && blogs?.data?.map((item, index) => {
                        if (index < 4) {
                            return (<BlogCard
                                key={item?._id}
                                item={item}
                                columnWidth={columnWidth}
                            />)
                        }

                    })
                    }

                </div>
            </div>

        </section>
    )
}

export default Blogs;
