import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import blogsListing from '../../assets/images/blogs/flex-backlit-banner-outdoor_82337.jpg';
import './index.scss';
import BlogCard from '../../components/global/blog-card/BlogCard';

const BlogList = () => {

    return (

        <>
            <Meta
                title="Blogs"
                link="/blogs"
            />
            <section className='blogs-list-banner'>

                <img className='blogs-banner-img' src={blogsListing} alt="Blogs Banner" />

                <div className='banner-overlay'>

                    <div className='blogs-listing-content'>

                        <div className='container-xxl'>

                            <h1>Our Blogs</h1>

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

            <section className="blogs-list my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-md-9'>

                            <div className='row'>

                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />
                                <BlogCard columnWidth={4} />

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='blog-category'>

                                <div className="accordion filter">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#category"
                                                aria-expanded="true"
                                            >
                                                Blogs By Category
                                            </button>
                                        </h2>
                                        <div
                                            id="category"
                                            className="accordion-collapse collapse show"
                                        >
                                            <div className="accordion-body pt-0">

                                                <ul className='category-list ps-0 mb-0'>

                                                    <li>Venial Paper</li>
                                                    <li>Frosted Paper</li>
                                                    <li>Panaflex Paper</li>
                                                    <li>Pak Paper</li>

                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default BlogList;
