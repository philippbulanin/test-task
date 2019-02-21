import React from 'react';
import '../index.scss';
import style from "../styles/style.js"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

class Information extends React.Component {
    handleClick = () => {
        this.props.clearProducts();
    };

    render() {
        const {total, productsNumber, average} = this.props;

        return (
            <div className="information">
                <AppBar color={"default"} position={"static"} style={style.information}>
                    <Toolbar className="information__toolbar">
                        <Badge color={"primary"} badgeContent={productsNumber}>
                            <Button onClick={this.handleClick} variant={"contained"} color={"secondary"}>
                                Clear
                            </Button>
                        </Badge>
                        <div className="information__price">
                            <Typography variant={"overline"} color={"default"}>
                                {`Total price: ${total} ₴`}
                            </Typography>
                            <Typography variant={"overline"} color={"default"}>
                                {`Average price: ${average} ₴`}
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export {Information};