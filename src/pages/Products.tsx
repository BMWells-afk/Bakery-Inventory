import React from 'react';
import InventoryList from '../components/InventoryList';
import InventoryData from '../data/Inventory.json'

const Products = () => {
    return (
        <div className='products-page'>
            <h2>Products</h2>
            <InventoryList products={InventoryData} />
        </div>
    );
};

export default Products;