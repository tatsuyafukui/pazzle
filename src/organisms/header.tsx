import React, { Component } from 'react';
const classes =  require('./header.css');

class Header extends Component {



    render() {

        return (
            <div className={'header'} style={classes}>
                <div>
                    <h1>パズル</h1>
                </div>
            </div>
        )

    }

}



export default Header;
