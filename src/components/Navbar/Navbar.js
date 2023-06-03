import { React, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavItem
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import {data} from '../../data/NavbarData';

const Navbar = () => {

    let navigate = useNavigate();
    let location = useLocation();

    return(
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav id="nav-container">
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon src="./assets/logo.png" alt="logo"/>
                        
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
}