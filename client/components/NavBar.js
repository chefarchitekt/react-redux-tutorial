import React, { Component } from 'react'; 
import { Link } from 'react-router';

//const pathToLogo = require('../images/spy.png');
//const getLogo = () => `<img src='${pathToLogo}' alt='Grumpy Cat' />`;

export default () => {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"
                            aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        <Link to="/" className="navbar-brand"style={{ paddingTop:0 }}>
                            <a href=""><img src={require('../images/spy.png')} style={{ width:50, height:50 }}/></a>
                        </Link>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Others</a></li>

                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); 
    
}

