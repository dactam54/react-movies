import React from "react";
import { Link } from 'react-scroll'

import { randomRgbaColor } from "../utils";

function MenuItem(props) {
  const { name, Icon ,to} = props;
  return (
    <Link>
    <div className="subMenu"
    to={to} spy={true} smooth={true} offset={-70} duration={500}
    activeClass="active">
      <Icon className="icon" style={{color: randomRgbaColor(1)}} />
      <span>{name}</span>
    </div>
    </Link>
  );
}

export default MenuItem;
