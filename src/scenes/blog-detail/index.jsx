import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import './index.scss';
import BlogDetailContent from '../../components/global/blog-detail-content/BlogDetailContent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBlog } from '../../redux/api/blogs/blogSlice';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {

    const { id: blogId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (blogId) {
            dispatch(getBlog(blogId));
        }
    }, [blogId, dispatch]);

    const { blogDetail, isLoading } = useSelector(state => state.blogs);

    // Show loading state
    if (isLoading) {
        return <div className="text-center my-5">Loading blog details...</div>;
    }

    if (!blogDetail) {
        return <div className="text-center my-5">Blog not found</div>;
    }

    const { title = '', images = [] } = blogDetail;

    return (
        <>
            <Meta title="Blogs" link="/blogs" />
            <section className="blogs-detail-banner">
                <img
                    className="blogs-banner-img"
                    src={images?.[0]?.url || 'https://via.placeholder.com/1200x400?text=No+Image'}
                    alt={title}
                />
                <div className="banner-overlay">
                    <div className="blogs-detail-content">
                        <div className="container-xxl">
                            <h1>{title}</h1>
                            <CustomBreadcrumb
                                className="custom-breadcrumb"
                                initialTitle="Home"
                                initialLink="/"
                                title="Blogs"
                                link="/blogs"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="blogs-detail-post my-5 mb-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <BlogDetailContent blogDetail={blogDetail} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;
