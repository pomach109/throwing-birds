import React from "react";
import { Link } from "react-router-dom";

function Alert(props) {
  return (
    <div className="scoring__alert">
      <div className="scoring__alert--header">
        <div className="scoring__alert--header--round">
          <img
            className="scoring__alert--header--round--img"
            src="/imgs/bird-stork.png"
            alt="stork"
          />
        </div>
      </div>

      <p>Do you want to finish the round?</p>

      <div className="scoring__alert--wrapper">
        <button
          className="scoring__alert--wrapper--btn scoring__alert--wrapper--btn--no"
          onClick={props.closeAlert}
        >
          No
        </button>
        <Link
          to="/winner"
          className="scoring__alert--wrapper--btn scoring__alert--wrapper--btn--yes"
        >
          {" "}
          yes
        </Link>
      </div>
    </div>
  );
}

export default Alert;
