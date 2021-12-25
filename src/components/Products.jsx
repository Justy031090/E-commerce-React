import React, { Component } from 'react';
import productsAPI from '../api/productsAPI';
import '../styles/products.css';

export class Products extends Component {
    state = {
        data: [],
    };
    async componentDidMount() {
        const res = await productsAPI.get('/products');
        this.setState({ data: res.data });
    }

    render() {
        return (
            <div>
                <h2 className="products-header">All Products</h2>
                <div className="product-container">
                    {this.state.data.map((el) => {
                        return (
                            <div key={el.id}>
                                <div className="product-wrap">
                                    <div className="product">
                                        <h2>{el.title}</h2>
                                        <img
                                            src={el.image}
                                            alt="Something gone wrong"
                                        />
                                        <p>{el.description}</p>
                                        <button className="product-button">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Products;
