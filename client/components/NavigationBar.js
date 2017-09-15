import React, { Component } from 'react'; 

//const pathToLogo = require('../images/spy.png');
//const getLogo = () => `<img src='${pathToLogo}' alt='Grumpy Cat' />`;

export default () => { 
    return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        <div className="navbar-brand" href="#">
                            <img src={require('../images/spy.png')} />
                        </div>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Others</a></li>

                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); 
}