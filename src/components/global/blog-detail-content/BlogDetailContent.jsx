import { Link } from 'react-router-dom';
import './index.scss';
import moment from 'moment';

const BlogDetailContent = ({ blogDetail }) => {

    if (!blogDetail || typeof blogDetail !== 'object') {
        return <div>Loading blog details...</div>;
    }

    const { title = '', category = '', createdAt, description = '', images = [] } = blogDetail;

    return (
        <div className="my-md-4 mt-md-0 mb-0 col-md-12">
            <div className="blog-detail-content">
                <p className="date">{moment(createdAt).format('MMM DD, YYYY, hh:mm a')}</p>

                <div className="blog-img">
                    {images?.[0]?.url ? (
                        <img alt={title} className="img-fluid" src={images[0].url} />
                    ) : (
                        <div>No image available</div>
                    )}
                </div>

                <div className="content p-3">
                    <h1>{category}</h1>
                    <h1>{title}</h1>
                    <p className="content" dangerouslySetInnerHTML={{ __html: description }}></p>

                    <Link className="btn btn-dark btn-read-more" to="/blogs">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailContent;
