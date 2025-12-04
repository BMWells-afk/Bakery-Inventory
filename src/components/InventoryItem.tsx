import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItem.css';

interface Product {
    sku: string;
    name: string;
    qty: number;
    price: number;
    image: string;
    description: string;
}

const InventoryItem = ({ product }: { product: Product }) => {
    return (
        <div className="inventory-item">
            <div className="product-details">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p className="price">${product.price.toFixed(2)}</p>
                <Link to={`/productDetail/${product.sku}`}>View Details</Link>
            </div>
        </div>
    );
};

export default InventoryItem;