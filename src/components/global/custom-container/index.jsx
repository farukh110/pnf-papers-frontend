import './index.scss';

const CustomContainer = (props) => {

    const { customClass, children } = props;

    return (
        <section className={customClass}>

            <div className='container-xxl'>
                {children}
            </div>

        </section>
    );
}

export default CustomContainer;