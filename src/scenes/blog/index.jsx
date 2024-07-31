import blogsListing from '../../assets/images/blogs/flex-backlit-banner-outdoor_82337.jpg';
import './index.scss';
import BlogCard from '../../components/global/blog-card/BlogCard';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';

const BlogList = () => {

    return (

        <>
            <BreadcrumbBanner
                metaTitle="Blogs"
                metaLink="/blogs"
                imageSource={blogsListing}
                imageAlt="Blogs Banner"
                bannerHeading="Our Blogs"
                homeTitle="Home"
                homeLink="/"
                pageLink="/blogs"
            />

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
