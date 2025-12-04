import React from 'react';
import { useParams } from 'react-router-dom';
import InventoryData from '../data/Inventory.json';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { sku } = useParams<{ sku: string }>();
    const product = InventoryData.find((item) => item.sku === sku);

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <Link to="/products">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="product-detail">
            <Link to="/products" className="back-link">← Back to Products</Link>
                <img src={product?.image} alt={product?.name} className="product-image" />
                <h2>{product?.name}</h2>
                <p className="sku">SKU: {product?.sku}</p>
                <p className="qty">Qty: {product?.qty}</p>
                <p className="price">Price: ${product?.price}</p>
                <button className="add-to-cart">Add to Cart</button>
        </div>

    );
};

export default ProductDetail