import { useState, KeyboardEvent } from "react";
import { useNavigate } from 'react-router-dom';

import { HeaderStyled } from "./style";

import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiSearchAlt2 } from 'react-icons/bi'

import logo from '../../assets/logo.png'
import photo from '../../assets/photo.jpg'

const Header = () => {
    const [text, setText] = useState('')
    const navigate = useNavigate()
    
    const handleSearch = (e: KeyboardEvent) => {
        if(e.keyCode === 13 && text){
            navigate(text)
        }
    }

    return (
        <HeaderStyled>
            <img src={logo} alt="logo" onClick={() => navigate('/')}/>

            <div className="search-input">
                <input 
                    type="text" 
                    placeholder="Search"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    onKeyUp={handleSearch}
                />
                <BiSearchAlt2 />
            </div>

            <div className="box">
                <img src={photo} alt="photo" />
                <button>
                    Alessandra
                    <MdKeyboardArrowDown />
                </button>
            </div>
        </HeaderStyled>
    )
};

export default Header;