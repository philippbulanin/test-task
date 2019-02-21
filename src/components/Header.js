import React from 'react';
import '../index.scss';
import style from "../styles/style.js"
import logo from "../images/logo.svg"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <AppBar position={"static"} style={style.header}>
                    <Toolbar>
                        <img src={logo} alt="logo" className="logo"/>
                        <Typography variant="title" color="inherit">
                            Catalog
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export {Header};