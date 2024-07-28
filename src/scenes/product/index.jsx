import productsListing from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import { Link } from 'react-router-dom';
import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import { Checkbox, InputNumber, Select, Tag } from 'antd';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ProductCard from './../../components/global/product-card/ProductCard';
import Color from '../../components/global/controls/colors/Color';

const ProductsList = () => {

    const [productsGrid, setProductsGrid] = useState(4);

    const onGridControl = (item) => {

        console.log('item: ', item);
        setProductsGrid(item);
    }

    const sortByItems = [
        {
            value: '1',
            label: 'Featured',
        },
        {
            value: '2',
            label: 'Best Selling',
        },
        {
            value: '3',
            label: 'Alphabetically, A-Z',
        },
        {
            value: '4',
            label: 'Alphabetically, Z-A',
        },
        {
            value: '5',
            label: 'Price, Low to High',
        },
        {
            value: '6',
            label: 'Price, High to Low',
        },
        {
            value: '7',
            label: 'Date, Old to New',
        },
        {
            value: '8',
            label: 'Date, New to Old',
        },
    ];

    return (
        <>
            <Meta
                title="Our Products"
                link="/products"
            />

            <section className='products-list-banner'>

                <img className='product-banner-img' src={productsListing} alt="Product Banner" />

                <div className='banner-overlay'>

                    <div className='product-listing-content'>

                        <div className='container-xxl'>

                            <h1>Our Products</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
                                initialTitle="Home"
                                initialLink="/"
                                title="Products"
                                link="/products"
                            />

                        </div>
                    </div>
                </div>

            </section>

            <section className="products-list my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-md-3'>

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

                                                <li>Venial Paper</li>
                                                <li>Frosted Paper</li>
                                                <li>Panaflex Paper</li>
                                                <li>Pak Paper</li>

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
                                                        />

                                                    </div>

                                                    <div className='col-md-6 ps-2'>

                                                        <InputNumber
                                                            placeholder='To'
                                                            prefix="Rs"
                                                            style={{
                                                                width: '100%',
                                                            }}
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

                                                <Tag className='mb-2'>Venial Paper</Tag>
                                                <Tag className='mb-2'>Silver Paper</Tag>
                                                <Tag className='mb-2'>Golden Paper</Tag>
                                                <Tag className='mb-2'>Frosted Paper</Tag>
                                                <Tag className='mb-2'>Panaflex Paper</Tag>

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

                                    <ProductCard productsGrid={productsGrid} />

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
