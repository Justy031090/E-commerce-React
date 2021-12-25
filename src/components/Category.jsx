import React, { Component } from 'react';
import productsAPI from '../api/productsAPI';
import '../styles/category.css';

export class Category extends Component {
    state = {
        data: [],
    };
    getData = async (category) => {
        const res = await productsAPI.get(`/products/category/${category}`);
        this.setState({ data: res.data });
        return this.state.data.map((el) => {
            console.log(el);
            return (
                <div key={el.id}>
                    <div className="product-wrap">
                        <div className="product">
                            <h2>{el.title}</h2>
                            <img src={el.image} alt="Something gone wrong" />
                            <p>{el.description}</p>
                            <button className="product-button">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
    };
    render() {
        return (
            <div className="main-category">
                <button onClick={() => this.getData("men's%20clothing")}>
                    Mens Clothing
                </button>
                <button onClick={() => this.getData("womens's%20clothing")}>
                    Womens Clothing
                </button>
                <button onClick={() => this.getData('jewelery')}>
                    jewelery
                </button>
                <button onClick={() => this.getData('electronics')}>
                    electronics
                </button>
            </div>
        );
    }
}

export default Category;
