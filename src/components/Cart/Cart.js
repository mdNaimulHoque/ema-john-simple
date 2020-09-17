import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, product) => total + product.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tex = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tex)).toFixed(2);
    const formatNumber= num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>tex + VAT: {tex}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;