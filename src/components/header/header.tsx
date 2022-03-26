import React from "react";
import { Constants } from "../../shared/constants/constants";
import Menu from "../menu/menu";
import SearchBar from "../search-bar/search-bar";
import './style.css';

interface HeaderProps {
    menuIndex : number,
    searchText : string,
	setSearchText : (text : string) => void,
    updateSearchText : (event:React.ChangeEvent<HTMLInputElement>) => void,
}

const Header: React.FC <HeaderProps>= ({menuIndex, searchText, updateSearchText, setSearchText}) => {
    return (
        <header className="header">
            <div className='logo-bar'>
                <img src={Constants.url.logoImage} alt='Logo' />
            </div>
            <Menu activeItem={menuIndex}/>
            <SearchBar 
                searchText={searchText} 
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => updateSearchText(event)}
                setSearchText={() => setSearchText('')} 
            />
        </header>
    )};

export default Header;