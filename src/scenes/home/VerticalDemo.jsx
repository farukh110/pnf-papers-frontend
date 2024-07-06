import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

const VerticalDemo = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = [
            { id: '1000', code: 'f230fh0g3', name: 'Bamboo Watch', description: 'Product Description', image: 'bamboo-watch.jpg', price: 65, category: 'Accessories', quantity: 24, inventoryStatus: 'INSTOCK', rating: 5 },
            { id: '1001', code: 'nvklal433', name: 'Black Watch', description: 'Product Description', image: 'black-watch.jpg', price: 72, category: 'Accessories', quantity: 61, inventoryStatus: 'INSTOCK', rating: 4 },
            { id: '1002', code: 'zz21cz3c1', name: 'Blue Band', description: 'Product Description', image: 'blue-band.jpg', price: 79, category: 'Fitness', quantity: 2, inventoryStatus: 'LOWSTOCK', rating: 3 },
            { id: '1003', code: '244wgerg2', name: 'Blue T-Shirt', description: 'Product Description', image: 'blue-t-shirt.jpg', price: 29, category: 'Clothing', quantity: 25, inventoryStatus: 'INSTOCK', rating: 5 },
            { id: '1004', code: 'h456wer53', name: 'Bracelet', description: 'Product Description', image: 'bracelet.jpg', price: 15, category: 'Accessories', quantity: 73, inventoryStatus: 'INSTOCK', rating: 4 },
            { id: '1005', code: 'av2231fwg', name: 'Brown Purse', description: 'Product Description', image: 'brown-purse.jpg', price: 120, category: 'Accessories', quantity: 0, inventoryStatus: 'OUTOFSTOCK', rating: 4 },
            { id: '1006', code: 'bib36pfvm', name: 'Chakra Bracelet', description: 'Product Description', image: 'chakra-bracelet.jpg', price: 32, category: 'Accessories', quantity: 5, inventoryStatus: 'LOWSTOCK', rating: 3 },
            { id: '1007', code: 'mbvjkgip5', name: 'Galaxy Earrings', description: 'Product Description', image: 'galaxy-earrings.jpg', price: 34, category: 'Accessories', quantity: 23, inventoryStatus: 'INSTOCK', rating: 5 },
            { id: '1008', code: 'vbb124btr', name: 'Game Controller', description: 'Product Description', image: 'game-controller.jpg', price: 99, category: 'Electronics', quantity: 2, inventoryStatus: 'LOWSTOCK', rating: 4 }
        ];
        setProducts(data.slice(0, 9));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center">
                <div className="mb-3">
                    <img
                        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                        alt={product.name}
                        className="img-fluid"
                    />
                </div>
                <div>
                    <h5 className="mb-1">{product.name}</h5>
                    <h6 className="mt-0 mb-3">{product.price} Rupees</h6>
                </div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Carousel
                value={products}
                numVisible={2}  // Show 2 slides
                numScroll={1}
                orientation="vertical"
                verticalViewPortHeight="335px"
                itemTemplate={productTemplate}
                showIndicators={false}  // Hide pagination indicators
            />
        </div>
    );
};

export default VerticalDemo;
