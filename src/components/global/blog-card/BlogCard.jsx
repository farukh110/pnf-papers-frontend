import { Link } from 'react-router-dom';
import moment from 'moment';
import './index.scss';

const BlogCard = (props) => {

    const { columnWidth = { lg: 4, md: 6, sm: 12 }, item } = props;
    const { lg, md, sm } = columnWidth;

    const { _id, image, createdAt, category, title } = item;

    return (
        <div className={`my-md-4 my-3 mt-md-0 col-lg-${lg} col-md-${md} col-sm-${sm}`}>

            <div className="blog-card shadow">
                <div className="card-image-area">

                    <img className="img-fluid w-100" src={image ? image : "https://www.micstatic.com/mic-search/img/home-2019/solutions-pic1.jpg?_v=1720717196527"} />

                </div>
                <div className="blog-content p-3">

                    <p className="date">{moment(createdAt).format('MMM DD, YYYY, hh:mm a')} </p>

                    <h5> {title} </h5>
                    <h5> {category} </h5>
                    {/* <p className='content' dangerouslySetInnerHTML={{ __html: description ? `${description.substring(0, 70)}...` : '' }}></p> */}

                    <Link className='btn btn-dark btn-read-more' to={`/blog/${_id}`}> Read More </Link>

                </div>
            </div>
        </div>
    )
}

export default BlogCard;
