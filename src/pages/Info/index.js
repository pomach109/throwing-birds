import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newGameModes } from "../../actions";
import "./info.scss";

function Info() {
  const currentHole = useSelector((state) => state.currentHole);
  const gameModes = useSelector((state) => state.gameModes);
  const dispatch = useDispatch();

  return (
    <div className="info">
      <div className="info__header">
        <div className="info__header--hole">
          <p className="info__header--hole--number">HOLE</p>
          <p className="info__header--hole--number">{currentHole}</p>
        </div>
      </div>

      <div className="info__table">
        {Object.entries(gameModes).map((entry) => {
          return (
            <div className="info__table__row" key={entry[0]}>
              <p className="info__table__row--left">{entry[0]}</p>
              <p className="info__table__row--right">{entry[1]}</p>
            </div>
          );
        })}
      </div>
      <div className="info__footer">
        <Link to="/scoring" className="info__footer--btn">
          <p className="info__footer--btn--arr">&larr;</p>
        </Link>
        <button
          className="info__footer--btn"
          onClick={() => {
            dispatch(newGameModes());
          }}
        >
          <p className="info__footer--btn--modes">&#8635;</p>
        </button>
      </div>
    </div>
  );
}

export default Info;
