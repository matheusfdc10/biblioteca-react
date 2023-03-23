import { useNavigate } from "react-router-dom";

import { HeaderStyled, InputMobile } from "./style";

import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

import logo from "../../assets/logo.png";
import photo from "../../assets/photo.jpg";
import SearchInput from "../SearchInput";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyled>
        <div>
          <img src={logo} alt="logo" onClick={() => navigate("/")} />

          <SearchInput className="SearchInput" />

          <div className="box">
            <div>
              <div className="active" />
              <AiOutlineBell />
            </div>
            <img src={photo} alt="photo" />
            <button>
              Alessandra
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </HeaderStyled>
      <InputMobile>
        <SearchInput />
      </InputMobile>
    </>
  );
};

export default Header;
