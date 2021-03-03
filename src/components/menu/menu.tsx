import React from "react";
import { Constants } from "../../modules/constants/constants";
import './style.css';

interface MenuProps {
    activeItem?: number
}

const Menu: React.FC <MenuProps>= ({activeItem}) => {
    return (
        <div className='menu-bar'>
            <ul>
                <li className={`${activeItem === 0 && 'active'}`}>
                    {Constants.labels.sunglasses}
                </li>
                <li className={`${activeItem === 1 && 'active'}`}>
                    {Constants.labels.eyeglasses}
                </li>
                <li className={`${activeItem === 2 && 'active'}`}>
                    {Constants.labels.lenses}
                </li>
            </ul>
        </div>
    );
}

export default Menu;