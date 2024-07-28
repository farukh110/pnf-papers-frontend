import { Link } from 'react-router-dom';
import './index.scss';

const BlogDetailContent = () => {

    return (
        <div className="my-md-4 mt-md-0 mb-0 col-md-12">

            <div className="blog-detail-content">

                <p className="date">7/13/2024 </p>

                <div className="blog-img">

                    <img className="img-fluid" src="https://www.micstatic.com/mic-search/img/home-2019/solutions-pic1.jpg?_v=1720717196527" />

                </div>
                <div className="content p-3">

                    <h1> Low Price Supplier Frontlit Backlit Flex Banner Advertising Banner Roll up Flex Banner PVC Light Fabric </h1>
                    <p className='content'>

                        Haining Fuxing Compound New Material Co., Ltd.Custom manufacturer. was established in 2003. We are specialized in producing customized PVC flex banner materials. Provide (240-800gsm) PVC flex banners. Customized colors are available. The maximum width is 5.1m. The company also produces PVC Films, PVC Tarpaulins, PVC Free Banners, Textile Banners, PVC Ceiling Films, PVC Wall Coverings, Window Curtains, One Way Vision, Reflective Banner&Vinyl, etc.

                    </p>

                    <Link className='btn btn-dark btn-read-more' to="/blogs"> Back to Blogs </Link>

                </div>
            </div>
        </div>
    )
}

export default BlogDetailContent;
