import React from "react";
import { Constants } from "../../modules/constants/constants";
import './style.css';

const Menu: React.FC = () => {
    return (
        <div className='menu-bar'>
            <ul>
                <li className='active'>{Constants.labels.sunglasses}</li>
                <li>{Constants.labels.eyeglasses}</li>
                <li>{Constants.labels.lenses}</li>
            </ul>
        </div>
    );
}

export default Menu;