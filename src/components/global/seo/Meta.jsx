import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Meta = (props) => {

    const { title, link } = props;

    return (
        <Helmet>

            <meta charSet="utf-8" />
            <title>{title}</title>
            <Link to={link}> {link} </Link>
        </Helmet>
    )
}

export default Meta;
