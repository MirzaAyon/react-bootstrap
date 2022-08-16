import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { id: 1, name: 'Laptop pro', price: 125000 },
        { id: 2, name: 'Laptop Cro', price: 125000 },
        { id: 3, name: 'Laptop Bro', price: 125000 },
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 key={product.id}
                        product={product}></Card2>)
                }
            </CardGroup>
            {/* eta react bootstrap er card group */}
        </div>
    );
};

export default CardGroup2;