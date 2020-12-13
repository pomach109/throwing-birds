import React from "react";
import { Link } from "react-router-dom";

import "./startpage.scss";

const StartPage = () => {
  return (
    <div className="startPage">
      <div className="startPage__header">
        <div className="startPage__header--title">
          <h1 className="startPage__header--title--text">Throwing Birds</h1>
          <p className="startPage__header--title--line"> </p>
        </div>
        <img
          className="startPage__header--img"
          src="/imgs/golf.png"
          alt="Figurez"
        />
      </div>
      <div className="startPage__btns">
        {/* <button className="startPage__btns startPage__btns--login">
          Login
        </button> */}
        <Link
          className="startPage__btns--guest"
          to="/begin"
          onClick={() => console.log("Directiing")}
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
