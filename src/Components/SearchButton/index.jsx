import React from "react";
import {ReactComponent as SearchIcon} from '../../assets/icons/search-icon.svg'
const SearchButton=({onClick})=>{
    return(
        <button>
            <SearchIcon  onClick ={onClick}
            />
        </button>
    );
}
export default SearchButton;