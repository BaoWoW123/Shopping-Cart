import React from "react";
const Header = () => {
    const showCart = () => {
        const cart = document.querySelector('.cart')
        console.log(cart)
        return (cart.className === 'cart') ? cart.className = 'cart active' : cart.className = 'cart';
    }
    return (
        <div className="header">
            <div> Something Here</div>
            <input label="searchBar" type="text" placeholder="Search for..."></input>
            <button className='cartBtn' onClick={showCart}> Cart</button>
        </div>
    )
}

export default Header;