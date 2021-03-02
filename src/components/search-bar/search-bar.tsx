import React from "react";
import { Constants } from "../../modules/constants/constants";

interface SearchBarProps {
    searchText: string;
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
    setSearchText : (s : string) => void
}

const SearchBar: React.FC <SearchBarProps> = ({searchText, onChange, setSearchText}) => {
    return (
        <div className='search-bar'>
            <input type='text' className='search-field' value={searchText} onChange={(event) => onChange(event)} />
            <button className='reset-search-field' onClick={() => setSearchText('')}>
                {Constants.labels.resetButton}
            </button>
        </div>
    );
}
export default SearchBar;