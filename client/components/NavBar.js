import React from 'react'; 
import { Link } from 'react-router';

//const pathToLogo = require('../images/spy.png');
//const getLogo = () => `<img src='${pathToLogo}' alt='Grumpy Cat' />`;

const NavBar = () => {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    
                    <div className="navbar-header">
                        <button 
                            type="button" 
                            className="navbar-toggle collapsed" 
                            data-toggle="collapse" 
                            data-target="#navbar-collapse-1"
                            aria-expanded="false"
                        >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                        </button>
                        <Link to="/" className="navbar-brand"style={{ paddingTop: 0 }}>
                            <img src={require('../images/spy.png') } style={{ width: 50, height: 50 }} alt="logo" />
                        </Link>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="#">Home <span className="sr-only">(current)</span></Link></li>
                            <li><Link to="#">Others</Link></li>

                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); 
};

export default NavBar;
