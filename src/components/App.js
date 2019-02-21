import React from 'react';
import '../index.scss';
import {Header} from "./Header";
import {Catalog} from "./Catalog";
import {Information} from "./Information";
import Products from "../data/products"

class App extends React.Component {
    state = {
        products: Products,
        total: 0,
        productsNumber: 0,
        average: 0
    };

    componentDidMount() {
        let {products, total, average} = this.state;

        total = 0;

        products.forEach(product => {
            total += product.price;
        });

        average = (total / products.length).toFixed(2);

        if (products.length === 0) {
            average = 0;
        }

        this.setState({
            total: total,
            productsNumber: products.length,
            average: average
        });
    }

    deleteProduct = id => {
        let {products, total, average} = this.state;

        products = products.filter(product => product.id != id);

        total = 0;

        products.forEach(product => {
            total += product.price;
        });

        average = (total / products.length).toFixed(2);

        if (products.length === 0) {
            average = 0;
        }

        this.setState({
            products: products,
            total: total,
            productsNumber: products.length,
            average: average
        });
    };

    clearProducts = () => {
        this.setState({
            products: [],
            total: 0,
            productsNumber: 0,
            average: 0
        });
    };

    render() {
        const {total, productsNumber, average, products} = this.state;
        return (
            <div className="app">
                <Header/>
                <Catalog
                    products={products}
                    deleteProduct={this.deleteProduct}
                />
                <Information
                    total={total}
                    productsNumber={productsNumber}
                    average={average}
                    clearProducts={this.clearProducts}
                />
            </div>
        )
    }
}

export {App};