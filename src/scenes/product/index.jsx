import productsListing from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import { Link } from 'react-router-dom';
import { Checkbox, InputNumber, Select, Tag } from 'antd';
import ReactStars from 'react-rating-stars-component';
import { useEffect, useState } from 'react';
import ProductCard from './../../components/global/product-card/ProductCard';
import Color from '../../components/global/controls/colors/Color';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/api/product/productSlice';

const ProductsList = () => {

    const [productsGrid, setProductsGrid] = useState(4);

    const dispatch = useDispatch();

    const { isSuccess, isError, isLoading, product } = useSelector(state => state?.product);

    const [brands, setBrands] = useState(null);
    const [categories, setCategories] = useState(null);
    const [tags, setTags] = useState(null);
    // const [colors, setColors] = useState([]);

    // filter states
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const [tag, setTag] = useState(null);
    // const [color, setColor] = useState([]);

    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [sort, setSort] = useState(null);

    console.log('product data: ', product);

    useEffect(() => {

        let brandItems = [];
        let categoryItems = [];
        let tagItems = [];
        // let colorItems = [];

        for (let index = 0; index < product?.length; index++) {

            const element = product[index];
            brandItems.push(element?.brand);
            categoryItems.push(element?.category);
            tagItems.push(element?.tags);
            // colorItems.push(element.color);

        }

        setBrands(brandItems);
        setCategories(categoryItems);
        setTags(tagItems);
        // setColors(colorItems);

    }, [product]);

    // console.log('brands: ', [... new Set(brands)]);
    // console.log('categories: ', [... new Set(categories)]);
    // console.log('tags ', [... new Set(tags)]);

    useEffect(() => {

        getProducts();

    }, [sort, tag, brand, category, minPrice, maxPrice]);

    const getProducts = () => {

        dispatch(getAllProducts({ sort, tag, brand, category, minPrice, maxPrice }));
    }

    const onGridControl = (item) => {

        console.log('item: ', item);
        setProductsGrid(item);
    }

    const sortByItems = [
        // {
        //     value: '1',
        //     label: 'Featured',
        // },
        // {
        //     value: '2',
        //     label: 'Best Selling',
        // },
        {
            value: 'title',
            label: 'Alphabetically, A-Z',
        },
        {
            value: '-title',
            label: 'Alphabetically, Z-A',
        },
        {
            value: 'price',
            label: 'Price, Low to High',
        },
        {
            value: '-price',
            label: 'Price, High to Low',
        },
        {
            value: 'createdAt',
            label: 'Date, Old to New',
        },
        {
            value: '-createdAt',
            label: 'Date, New to Old',
        },
    ];

    const handleSortChange = (value) => {
        console.log('Selected sort value:', value);
        setSort(value);
    };


    return (
        <>
            <BreadcrumbBanner
                metaTitle="Our Products"
                metaLink="/products"
                imageSource={productsListing}
                imageAlt="Product Banner"
                bannerHeading="Our Products"
                homeTitle="Home"
                homeLink="/"
                pageLink="/products"
            />

            <section className="products-list my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-md-3'>

                            <div className="accordion filter mb-3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#category"
                                            aria-expanded="true"
                                        >
                                            Product By Brands
                                        </button>
                                    </h2>
                                    <div
                                        id="brands"
                                        className="accordion-collapse collapse show"
                                    >
                                        <div className="accordion-body pt-0">

                                            <ul className='category-list ps-0 mb-0'>

                                                {brands && [... new Set(brands)].map((item, index) => {

                                                    return <li onClick={() => setBrand(item)} key={index}>{item}</li>

                                                })
                                                }

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="accordion filter">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#category"
                                            aria-expanded="true"
                                        >
                                            Product By Category
                                        </button>
                                    </h2>
                                    <div
                                        id="category"
                                        className="accordion-collapse collapse show"
                                    >
                                        <div className="accordion-body pt-0">

                                            <ul className='category-list ps-0 mb-0'>

                                                {categories && [... new Set(categories)].map((item, index) => {

                                                    return <li onClick={() => setCategory(item)} key={index}>{item}</li>

                                                })
                                                }

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="accordion filter my-3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#filterBy"
                                            aria-expanded="true"
                                        >
                                            Filter By
                                        </button>
                                    </h2>
                                    <div
                                        id="filterBy"
                                        className="accordion-collapse collapse show"
                                    >
                                        <div className="accordion-body pt-0">

                                            <div className='filter-by'>

                                                <h5 className='filter-by-title'> Availability </h5>

                                                <Checkbox
                                                    className='custom-checkbox'
                                                    onChange={(e) => {
                                                        console.log(`checked = ${e.target.checked}`);
                                                    }}>
                                                    In Stock (1)
                                                </Checkbox>
                                                <br />
                                                <Checkbox
                                                    className='custom-checkbox'
                                                    onChange={(e) => {
                                                        console.log(`checked = ${e.target.checked}`);
                                                    }}>
                                                    Out of Stock (0)
                                                </Checkbox>

                                                <h5 className='filter-by-title mt-md-3'> Price </h5>

                                                <div className='row'>

                                                    <div className='col-md-6 pe-2'>

                                                        <InputNumber
                                                            placeholder='From'
                                                            prefix="Rs"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                            onChange={(e) => setMinPrice(e.target.value)}
                                                        />

                                                    </div>

                                                    <div className='col-md-6 ps-2'>

                                                        <InputNumber
                                                            placeholder='To'
                                                            prefix="Rs"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                            onChange={(e) => setMaxPrice(e.target.value)}
                                                        />

                                                    </div>

                                                </div>

                                                <h5 className='filter-by-title mt-md-3'> Colors </h5>

                                                <div className='d-flex flex-wrap'>

                                                    <Color />

                                                </div>

                                                <h5 className='filter-by-title mt-md-1'> Size </h5>

                                                <Checkbox
                                                    className='custom-checkbox'
                                                    id="color-1"
                                                    onChange={(e) => {
                                                        console.log(`checked = ${e.target.checked}`);
                                                    }}>
                                                    S (2)
                                                </Checkbox>
                                                <br />
                                                <Checkbox
                                                    className='custom-checkbox'
                                                    id="color-2"
                                                    onChange={(e) => {
                                                        console.log(`checked = ${e.target.checked}`);
                                                    }}>
                                                    M (4)
                                                </Checkbox>
                                                <br />
                                                <Checkbox
                                                    className='custom-checkbox'
                                                    id="color-3"
                                                    onChange={(e) => {
                                                        console.log(`checked = ${e.target.checked}`);
                                                    }}>
                                                    L (26)
                                                </Checkbox>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="accordion filter mb-3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#productTag"
                                            aria-expanded="true"
                                        >
                                            Product Tag
                                        </button>
                                    </h2>
                                    <div
                                        id="productTag"
                                        className="accordion-collapse collapse show"
                                    >
                                        <div className="accordion-body pt-0">

                                            <div className='product-tags d-flex flex-wrap align-items-center'>


                                                {tags && [... new Set(tags)].map((item, index) => {

                                                    return <Tag className='mb-2' onClick={() => setTag(item)} key={index}>{item}</Tag>

                                                })
                                                }

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="accordion filter">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#randomProduct"
                                            aria-expanded="true"
                                        >
                                            Random Product
                                        </button>
                                    </h2>
                                    <div
                                        id="randomProduct"
                                        className="accordion-collapse collapse show"
                                    >
                                        <div className="accordion-body pt-0">

                                            <div className="row random-product my-2 align-items-center">

                                                <div className="col-md-4">

                                                    <img className='img-fluid random-product-img' src="https://image.made-in-china.com/2f0j00MrARBIUKlSbZ/600d-Polyester-Student-Backpack-Children-Outdoor-Leisure-School-Bag.webp" alt="" />

                                                </div>

                                                <div className="col-md-8">

                                                    <h4 className="product-title mb-0">Low Price Supplier Frontlit Backlit Flex Banner </h4>

                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value="3"
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />

                                                    <p className="random-price mb-0"> Rs 6000 <strike> 2000 </strike> </p>

                                                </div>

                                            </div>

                                            <div className="row random-product my-2 align-items-center">

                                                <div className="col-md-4">

                                                    <img className='img-fluid random-product-img' src="https://image.made-in-china.com/2f0j00MrARBIUKlSbZ/600d-Polyester-Student-Backpack-Children-Outdoor-Leisure-School-Bag.webp" alt="" />

                                                </div>

                                                <div className="col-md-8">

                                                    <h4 className="product-title mb-0">Low Price Supplier Frontlit Backlit Flex Banner </h4>

                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value="3"
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />

                                                    <p className="random-price mb-0"> Rs 6000 <strike> 2000 </strike> </p>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='col-md-9'>

                            <div className='row custom-toolbar justify-content-between p-3'>

                                <div className='col-md-4'>

                                    <div className='row align-items-center'>

                                        <div className='col-md-3'>
                                            <p className='mb-0'> Sort By </p>
                                        </div>

                                        <div className='col-md-9'>
                                            <Select
                                                showSearch
                                                style={{
                                                    width: "100%",
                                                }}
                                                placeholder="Search to Select"
                                                value={sort}
                                                onChange={handleSortChange}
                                                optionFilterProp="label"
                                                filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                }
                                                options={sortByItems}
                                            />
                                        </div>

                                    </div>

                                </div>

                                <div className='col-md-4'>

                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <p className='products-count mt-1 mb-0'> 40 Products </p>
                                            <i className='pi pi-align-justif'></i>
                                        </div>

                                        <div className='col-md-8'>

                                            <div className="btn-group grid-btn-group w-100">
                                                <button type="button" onClick={() => onGridControl(3)} className="btn btn-primary">
                                                    <i className="bi bi-grid-3x3-gap"></i>
                                                </button>
                                                <button type="button" onClick={() => onGridControl(4)} className="btn btn-primary">
                                                    <i className="bi bi-grid-3x2"></i>
                                                </button>
                                                <button type="button" onClick={() => onGridControl(6)} className="btn btn-primary">
                                                    <i className="bi bi-grid"></i>
                                                </button>
                                                <button type="button" onClick={() => onGridControl(12)} className="btn btn-primary">
                                                    <i className="bi bi-list"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* products list */}

                            <div className='products-list mt-md-4'>

                                <div className='row'>

                                    <ProductCard data={product ? product : []} productsGrid={productsGrid} />

                                    <ProductCard productsGrid={productsGrid} />

                                    <ProductCard productsGrid={productsGrid} />

                                    <ProductCard productsGrid={productsGrid} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default ProductsList;
