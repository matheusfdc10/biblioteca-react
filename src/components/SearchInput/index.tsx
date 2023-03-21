import { SearchInputStyled } from "./style";
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({...props}) => {
    const [text, setText] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: KeyboardEvent) => {
        if(e.keyCode === 13 && text){
            navigate(text)
            setText('')
        }
    }

    return (
        <SearchInputStyled {...props}>
            <input 
                type="text" 
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
                value={text}
                onKeyUp={handleSearch}
            />
            <BiSearchAlt2 />
        </SearchInputStyled>
    )
}

export default SearchInput;