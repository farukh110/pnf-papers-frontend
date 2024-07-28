import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import blogsListing from '../../assets/images/blogs/flex-backlit-banner-outdoor_82337.jpg';
import './index.scss';
import BlogDetailContent from '../../components/global/blog-detail-content/BlogDetailContent';

const BlogDetail = () => {

    return (

        <>
            <Meta
                title="Blogs"
                link="/blogs"
            />
            <section className='blogs-detail-banner'>

                <img className='blogs-banner-img' src={blogsListing} alt="Blogs Banner" />

                <div className='banner-overlay'>

                    <div className='blogs-detail-content'>

                        <div className='container-xxl'>

                            <h1>Blog Detail</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
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

                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-md-12'>

                            <div className='row'>

                                <BlogDetailContent />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default BlogDetail;
