import React, { Component } from 'react';

export class Cart extends Component {
    state = {
        itemsCounter: [],
    };
    gotData = () => {
        this.setState({ itemsCounter: this.itemsCounter.length });
    };
    render() {
        return <div>elllo</div>;
    }
}

export default Cart;
