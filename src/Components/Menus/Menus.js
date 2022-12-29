import {  FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import {
GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menus(props) {
  return (      
    <MenusPane>
      <MenuItem name="Netflix" Icon={SiNetflix} to='netflix'/>

      <MenuItem name="Trending" Icon={FaHotjar} to="trending"/>

      <MenuItem name="Top rare" Icon={FaStar} to="topRated"/>

      <MenuItem name="Action movie" Icon={GiNinjaHeroicStance} to="actionMovies"/>

      <MenuItem name="Comedy movie" Icon={MdTheaterComedy} to="comedyMovies"/>

      <MenuItem name="Horror movie" Icon={GiGhost} to="horrorMovies"/>

      <MenuItem name="Romance movie" Icon={GiRomanToga} to="romanceMovies"/>

      <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries"/>
    </MenusPane>
  )
}
export default Menus;

const MenusPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;

  width: 46px;
  padding: 4px 0;
  background: rgba(220, 220, 220, 0.3);
  z-index: 100;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
&:hover{
    width: 180px;
    background: rgba(0, 0, 0, 0.5);
}

  .subMenu{
    display: flex;
    align-items: center;
    width: max-content;
    margin-left:2px;
    padding: 4px 6px;
    cursor: pointer;
    

    .icon{
        font-size: 30px;
        margin-right: 8px;

    }
    span{
        font-size: 16px;
        font-weight: 400;
        color: rgb(255,255,255,0.6);

        &:hover{
            color:#fff;
            
        }
    }
  }
`;
