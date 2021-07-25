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
                    
                    <Link  to="/clientprofile">
                        <li >Welcome {localStorage.getItem('fullname')} </li>
                    </Link>

                    <Link  to="/about">
                        <li >About Us </li>
                    </Link>
                    <Link  to="/service">
                            <li >Services </li>
                     </Link>

                    <Link  to="/booking">
                        <li >Booking </li>
                    </Link>
                    <Link  to="/contact">
                        <li >Contact Us </li>
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
                        <img src="/images/logo2.png" alt="logo"/>
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