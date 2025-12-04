import React from 'react';
import InventoryItem from './InventoryItem';
import './InventoryList.css';

interface Product {
    sku: string;
    name: string;   
    qty: number;
    price: number;
}

interface InventoryListProps {
    products: Product[];
}

const InventoryList = ({ products }: InventoryListProps) => {
    return (
        <div className="inventory-list">
            {products.map((product) => (
                <InventoryItem key={product.sku} product={product} />
            ))}
        </div>
    );
};

export default InventoryList;