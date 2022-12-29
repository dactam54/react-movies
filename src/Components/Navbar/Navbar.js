import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useScrollY } from "../Hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [scrollY] = useScrollY();

  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords)
    (keywords.length > 0)
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  };
  const goHome =()=>{
    navigate('/')
    setKeywords('')
  }

  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={NetflixLogo} alt="" />
        </div>

        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title , genres, people"
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.nav`
  left: 0;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: var(--height-navbar);

  transition-timing-function: ease-in;
  transition: all 1s;
  top: 0;

  .navContainer {
    background-color: transparent;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }

    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }

    .subNav {
      font-weight: 500;
      font-size: 14px;
      color: var(--color-white);
      text-decoration: none;
      margin-right: 20px;
      transition: all 0.2s;
      cursor: pointer;
    }

    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: none;
        color: var(--color-white);
        outline: none;
        width: 0px;
        padding: 10px;
        background: var(--color-background);
        border: 1px solid #fff;
        transition: width 0.5s;
        cursor: pointer;
        opacity: 0;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
