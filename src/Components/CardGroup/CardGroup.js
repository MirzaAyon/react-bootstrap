import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop pro', price: 125000 },
        { id: 2, name: 'Laptop Cro', price: 125000 },
        { id: 3, name: 'Laptop Bro', price: 125000 },
    ]
    return (
        <div>
            <h2>My cards</h2>
            <div className="card-group">
                {
                    products.map(product => <Card key={product.id}
                        product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;