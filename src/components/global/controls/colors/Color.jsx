const Color = ({ setColor, colorItems }) => {
    return (
        <ul className='colors ps-0'>
            {
                colorItems?.map((item) => {
                    let colorValue = item?.title;

                    // Check if it's a hex code without the '#' and prepend it
                    if (colorValue && !colorValue.startsWith('#') && colorValue.length === 6) {
                        colorValue = `#${colorValue}`;
                    }

                    return (
                        <li
                            onClick={() => setColor(item?._id)}
                            key={item?._id}
                            style={{ background: colorValue ? colorValue : 'transparent' }}
                        ></li>
                    );
                })
            }
        </ul>
    );
};

export default Color;
