import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const logout = ()=>{
            localStorage.clear();
            window.location.href = '/'
        }

        if (localStorage.getItem('token')) {
            var menu =
                <ul >

                    <Link className="nav-item"  to="/dashboard">
                        <li >Dashboard </li>
                    </Link>

                    <Link  to="/order">
                        <li className="nav-item">
                          Order
                        </li>
                    </Link>
                    <Link  to="/market">
                        <li >Market Data </li>
                     </Link>

                    <Link  to="/trade">
                        <li >Trade </li>
                    </Link>
                    <Link  to="/fund">
                        <li >Fund </li>
                    </Link>

                    <Link  to="/fund">
                        <li >My Profile </li>
                    </Link>

                    <Link  to="/logout">
                        <li onClick={logout}>Log out </li>
                    </Link>
                   
                </ul>
        } else {
            var menu =
                
                <ul className="">
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    </li>   
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            }

        return (      
            <div className='header'>
                <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <Link to="/">
                    <div className="logo" >
                        <img src="/images/logo2.png" alt="logo" style={{paddingTop:"3px"}}/>
                        <h3 style={{float:"right", padding:"10px", color:"#00a07a"}}>
                            Digital Trading</h3>
                    </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" 
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span></button>
                    <nav id="navbar" className="navbar" >
                        {menu}
                    </nav>
                </div>
                </header>
            </div> 
        )
    }
}

export default Header;