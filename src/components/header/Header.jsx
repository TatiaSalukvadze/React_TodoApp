import React, { useContext } from "react";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import "./Header.css";
import { MyContext } from "../../App";

function Header() {
  const { day, setDay } = useContext(MyContext);

  return (
    <div className="innert">
      <h1>TODO</h1>
      <button onClick={() => setDay(!day)}>
        {day ? <img src={moon} /> : <img src={sun} />}
      </button>
    </div>
  );
}

export default Header;
