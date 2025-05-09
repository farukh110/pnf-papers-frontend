const Color = ({ colorItems }) => {
    return (
        <>
            <ul className='colors ps-0'>
                {
                    colorItems?.map((item) => <li key={item?._id} style={{ background: item?.color }}></li>)
                }
            </ul>
        </>
    )
}

export default Color;
