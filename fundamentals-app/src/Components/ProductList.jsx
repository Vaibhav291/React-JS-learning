import React from "react";

const products = [
    { id: 1, name: 'Laptop' , price: 800 },
    { id: 2, name: 'Smartphone', price: 500 },  
    { id: 3, name: 'Tablet', price: 300 }
];

function ProductList() {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;