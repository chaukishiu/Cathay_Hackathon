import React from "react";
import cathay from '../images/cathay.png';

import {
    Nav,
    NavLogo,
    NavLeftItem,
    NavMidItem,
    NavRightItem,
    NavIcon,
    NavLeftIconList,
    NavRightIconList,
    Line
  } from './NavbarElements';

import { BiUserCircle } from "react-icons/bi";
import { FiShoppingCart } from 'react-icons/fi'; 
import { GiHamburgerMenu } from 'react-icons/gi'

const TopNavbar = () => {
    return (
        <>
        <Line/>
        <Nav>
            <NavLeftItem>
            <NavLeftIconList>
                <NavIcon>
                <GiHamburgerMenu/>
                </NavIcon>
            </NavLeftIconList>
            </NavLeftItem>

            <NavMidItem>
                <NavLogo src={cathay} alt={cathay}/>
            </NavMidItem>

            <NavRightItem>
                <NavRightIconList>
                <NavIcon><BiUserCircle/></NavIcon>
                <NavIcon><FiShoppingCart/></NavIcon>
                </NavRightIconList>
            </NavRightItem>
        </Nav>
      </>
    );
};
export default TopNavbar;