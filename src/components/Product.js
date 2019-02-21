import React from 'react';
import style from "../styles/style.js"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';


class Product extends React.Component {

    handleClick = event => {
        this.props.deleteProduct(event.target.closest(".product").id);
    };

    render() {
        const {id, name, img, description, price} = this.props;

        return (
            <Card id={id} className="product">
                <img src={img} alt="img" className="product__img"/>
                <CardContent className="product__description">
                    <Typography align="center" variant="h6" component="h1">
                        {name}
                    </Typography>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className="product__info">
                    <Typography component="p" style={style.price}>
                        {`${price} ₴`}
                    </Typography>
                    <Fab onClick={this.handleClick} size="small">
                        <DeleteIcon color="secondary"/>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}

export {Product};