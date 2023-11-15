import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    const { id, name, price, shipping, img, quantity } = product;
    return (
        <div className='reviw-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{shipping}</p>
                <p>{quantity}</p>
            </div>
        </div>
    );
};

export default ReviewItem;