import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const CustomBreadcrumb = (props) => {

    const { initialTitle, initialLink, title, link, className } = props;

    return (
        <>
            <Breadcrumb
                className={className}
                items={[
                    {
                        title: <Link className='text-white' to={initialLink}>{initialTitle}</Link>,
                    },
                    {
                        title: <Link className='text-white' to={link}>{title}</Link>,
                    },
                ]}
            />
        </>
    )
}

export default CustomBreadcrumb;
