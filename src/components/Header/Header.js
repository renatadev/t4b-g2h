import React, { useState } from "react";
import * as SC from "./Header.style";
import logo from "../../assets/g2h-logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState(null);

  const dataCall = async () => {
    await (
      await fetch(
        `/.netlify/functions/getKeyword/getKeyword.js?keywords=${keyword}`
      )
    )
      .json()
      .then(data => console.log(data))
      .catch(console.error);
  };

  return (
    <SC.HeaderBox>
      <SC.LogoBox>
        <SC.G2hLogo src={logo} alt="Gateway2Heritage logo" />
      </SC.LogoBox>
      <SC.Middle>
        <SC.TitleBox>
          <h1>Gateway2Heritage</h1>
        </SC.TitleBox>
        <SC.SearchBox>
          <SC.SearchBar
            placeholder="Search"
            onChange={event => setKeyword(event.target.value)}
          />
          <NavLink to="/search">
            <button onClick={dataCall}>SEARCH</button>
          </NavLink>
        </SC.SearchBox>
      </SC.Middle>
      <SC.MenuArea>
        <a href="/">&#9776; MENU</a>
      </SC.MenuArea>
    </SC.HeaderBox>
  );
};

export default Header;
