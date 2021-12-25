import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = {
        cart: 0,
    };

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/categories">
                    <span>Categories</span>
                </Link>
                <Link to="/products">
                    <span>All Products</span>
                </Link>
                <Link to="/shopping-cart">
                    <span>
                        <i className="fa fa-shopping-cart"></i>{' '}
                        {this.state.cart}
                    </span>
                </Link>
            </div>
        );
    }
}

export default Header;
