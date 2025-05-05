import React from 'react';

const Products: React.FC = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
                <h1>Available Products</h1>
            </header>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <div className="product" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', display: 'inline-block', width: '200px', textAlign: 'center' }}>
                    <img src="https://picsum.photos/200" alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>\$19.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', display: 'inline-block', width: '200px', textAlign: 'center' }}>
                    <img src="https://picsum.photos/id/237/200" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>\$29.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', display: 'inline-block', width: '200px', textAlign: 'center' }}>
                    <img src="https://picsum.photos/seed/picsum/200" alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>\$39.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
