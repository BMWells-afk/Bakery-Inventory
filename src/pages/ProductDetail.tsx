import React from 'react';
import { useParams } from 'react-router-dom';
import InventoryData from '../data/Inventory.json';
import './ProductDetail.css';

const ProductDetail = () => {
    const { sku } = useParams<{ sku: string }>();
    const product = InventoryData.find((item) => item.sku === sku);


    return (
        <div className="product-detail">
            <h2>{product?.name}</h2>
            <p className="sku">SKU: {product?.sku}</p>
            <p className="qty">Qty: {product?.qty}</p>
            <p className="price">Price: ${product?.price}</p>
        </div>

    );
};

export default ProductDetail