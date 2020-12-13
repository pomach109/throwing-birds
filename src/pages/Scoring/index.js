import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//from components-folder
import PlayerCard from "../../components/PlayerCard";
import Alert from "../../components/Alert";

import {
  addThrows,
  addCoursePar,
  calcRoundScores,
  nextHole,
} from "../../actions";

import "./scoring.scss";

function Scoring() {
  console.log("[Running Scoring cmp]");

  //Read from global state
  const scorecard = useSelector((state) => state.scorecard);
  const holeNumber = useSelector((state) => state.currentHole);
  //Enables writing-communication with redux
  const dispatch = useDispatch();

  //Initialise throws, locally, for each player comming from store
  let InitThrows = {};
  Object.keys(scorecard).forEach((key) => {
    InitThrows[key] = 3;
  });

  //Local state (to send to Redux)
  const [holeThrows, setHoleThrows] = useState(InitThrows);
  const [holePar, setHolePar] = useState(3);

  //Local state
  const [btnDisable, setBtnDisable] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  //Reset Throws (upon moving to next hole)
  const resetThrows = () => {
    Object.keys(scorecard).every((key) => (holeThrows[key] = 0));
    setHoleThrows(InitThrows);
  };

  //Check input (valid throw input)
  useEffect(() => {
    if (Object.keys(holeThrows).every((key) => holeThrows[key])) {
      setBtnDisable(false);
    } else setBtnDisable(true);
  }, [setBtnDisable, holeThrows]);

  //Call action, so to update redux AND rest local state
  const moveOn = () => {
    dispatch(addCoursePar(holePar));
    dispatch(addThrows(holeThrows));
    dispatch(calcRoundScores(holeThrows, holePar));
    dispatch(nextHole(holeNumber));
    resetThrows();
  };

  return (
    <div className="scoring">
      {showAlert && <Alert closeAlert={() => setShowAlert(false)} />}

      <div className="scoring__header">
        <Link to="/info">
          <img
            className="scoring__header--logo"
            src="/imgs/document.png"
            alt="info"
          />
        </Link>

        <div className="scoring__header--parWrap">
          <div className="scoring__header--parWrap--title">
            <p>Hole </p>
            <p>{holeNumber}</p>
          </div>
          <div className="scoring__header--parWrap--value">
            <button
              onClick={() => {
                setHolePar((prevNumber) =>
                  prevNumber > 2 ? prevNumber - 1 : prevNumber
                );
              }}
            >
              <p>-</p>
            </button>
            <p>Par </p>
            <p>{holePar}</p>
            <button
              onClick={() => {
                setHolePar((prevNumber) => prevNumber + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <Link to="/stats">
          <img
            className="scoring__header--logo"
            src="/imgs/stats.png"
            alt="stats"
          />
        </Link>
      </div>
      <div className="scoring__player">
        {Object.entries(scorecard).map((entry, idx) => {
          const playerName = entry[0];
          const playerData = entry[1];
          const holeScore = holeThrows[playerName];
          return (
            <PlayerCard
              key={idx}
              idx={idx}
              playerName={playerName}
              playerData={playerData}
              holeScore={holeScore}
              setHoleScores={setHoleThrows}
            />
          );
        })}
      </div>

      <div className="scoring__footer">
        <button
          className="scoring__footer--btn scoring__footer--btn"
          onClick={() => {
            setShowAlert(true);
          }}
        >
          <p className="scoring__footer--btn scoring__footer--btn--break">x</p>
        </button>
        <button
          className="scoring__footer--btn scoring__footer--btn"
          disabled={btnDisable}
          onClick={moveOn}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Scoring;
