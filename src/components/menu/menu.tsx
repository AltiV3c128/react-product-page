import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Constants } from "../../shared/constants/constants";

import './style.css';
interface MenuProps {
    activeItem?: number
}

const Menu: React.FC <MenuProps>= ({activeItem}) => {
    return (
        <div className='menu-bar'>
            <ul>
                <li className={`${activeItem === 0 && 'active'}`}>
                    <Link to="/products">{Constants.labels.sunglasses}</Link>
                </li>
                <li className={`${activeItem === 1 && 'active'}`}>
                    {Constants.labels.eyeglasses}
                </li>
                <li className={`${activeItem === 2 && 'active'}`}>
                    {Constants.labels.lenses}
                </li>
                <li className={`${activeItem === 3 && 'active'}`}>
                    <Link to="/repo">{Constants.labels.files}</Link>
                </li>
            </ul>
        </div>
        
    );
}

export default Menu;