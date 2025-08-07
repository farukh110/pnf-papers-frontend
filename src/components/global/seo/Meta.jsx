import { Helmet } from "react-helmet";

const Meta = ({ title, link }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            {link && <link rel="canonical" href={link} />}
        </Helmet>
    );
};

export default Meta;
