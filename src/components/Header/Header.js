import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {Button, Form, Nav, Navbar } from 'react-bootstrap';
import { FormControl } from '@material-ui/core';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row"  style={{backgroundColor: "deepskyblue"}}>
            <div className=" d-flex justify-content-md-between align-items-center container">
                <h3 className='heading' >Find Your Way</h3>
                <div style={{width:"30%"}} className=" menu d-flex justify-content-md-between">
                    <Link to="/home"><span>Home</span></Link>
                    <Link to="/destination"><span>Destination</span></Link>
                    <Link to="/blog"><span>Blog</span></Link>
                    <Link to="/contact"><span>Contact</span></Link>
                    <Button variant="outline-light" href="/login">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;

