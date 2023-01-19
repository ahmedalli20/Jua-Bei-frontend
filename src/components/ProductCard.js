import React from 'react';
import './ProductCard.css'


const ProductCard = ({product}) => {

    let rating = parseInt(product.ratings)
    let shortName = product.name
    if (shortName.length > 60) {
        shortName = shortName.slice(0, 60) + "..."
    }
    const stars = [false, false, false, false, false]
    for (let i = 0; i < rating; i++) {
        stars[i] = true
    }

    
    return (
        <div className='product-card'>
             <a href={product.product_url} className="products-a">
                <div className='product-image'>
                    <img className='image' src={product.image_url} alt={product.name.slice(0, 17)} />
                    <div className='store-image'>
                        <img src={`../icons/${product.store}.png`} alt={product.store} />
                    </div>
                  
                </div>
                <div className='product-card-details'>
                    <p className='product-name'>Name: {shortName}</p>
                    <div className='discount'>
                        <p>Discount: {product.discount}</p>
                    </div>
                    <div className='product-prices'>
                        <p className='price'>Price: ksh{product.price}</p>
                        {/* <p className='price-cancelled'>{product.price_before_discount}</p> */}
                    </div>
                    <div className='product-stars'>
                        {rating ? stars.map((star, index) => <img key={index} className={`star ${star ? "star-on" : "star-off"}`} src='../icons/star.svg' alt='stars' />) : null}
                        <p className='product-ratings'>Rating: {product.rating ? "(" + product.rating + ")" : ""}</p>
                    </div>
                    <button className="card-btn" onClick={() => window.open(product.product_link)}>view in shop</button>
 
                </div>
            </a>
        </div>
    );
};

export default ProductCard;