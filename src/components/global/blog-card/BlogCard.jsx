import { Link } from 'react-router-dom';
import './index.scss';

const BlogCard = (props) => {

    const { columnWidth } = props;

    return (
        <div className={` my-md-4 mt-md-0 col-md-${columnWidth}`}>

            <div className="blog-card shadow">
                <div className="card-image-area">

                    <img className="img-fluid" src="https://www.micstatic.com/mic-search/img/home-2019/solutions-pic1.jpg?_v=1720717196527" />

                </div>
                <div className="blog-content p-3">

                    <p className="date">7/13/2024 </p>
                    <h5> title </h5>
                    <p className='content'>content </p>

                    <Link className='btn btn-dark btn-read-more' to="/"> Read More </Link>

                </div>
            </div>
        </div>
    )
}

export default BlogCard;
