import React from 'react';
import {Product} from "./Product";
import style from "../styles/style.js"
import '../index.scss';
import GridList from '@material-ui/core/GridList';
import i7 from '../images/i7.jpg'
import i5 from '../images/i5.jpg'
import i3 from '../images/i3.jpg'
import pentium from '../images/pentium.jpg'
import celeron from '../images/celeron.jpg'
import Typography from '@material-ui/core/Typography';

class Catalog extends React.Component {
    state = {
        images: {
            "i7": i7,
            "i5": i5,
            "i3": i3,
            "pentium": pentium,
            "celeron": celeron,
        }
    };

    render() {
        const {images} = this.state;
        const {products} = this.props;
        const productsList = products.length > 0 ? products.map((product) =>
            <Product
                key={product.id}
                id={product.id}
                name={product.name}
                img={images[product.img]}
                description={product.description}
                price={product.price}
                deleteProduct={this.props.deleteProduct}
            />
        ) : <Typography style={style.empty} color={"secondary"} variant={"h3"}>
                Catalog is empty
            </Typography>;

        return (
            <div>
                <GridList style={style.productsList}>
                    {productsList}
                </GridList>
            </div>
        )
    }
}

export {Catalog};