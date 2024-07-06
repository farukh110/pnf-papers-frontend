const CategoryBox = (props) => {

    const { imageSource, title } = props;

    return (
        <>
            <div className="image-container">
                <img src={imageSource} alt={title} />
                <div className="overlay">
                    {/* <h2>Hover Text</h2> */}
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default CategoryBox;
