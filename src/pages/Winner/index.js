import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetRedux } from "../../actions";
import "./winner.scss";

function Winner() {
  const scorecard = useSelector((state) => state.scorecard);
  const dispatch = useDispatch();

  let bestPlayer = [];
  let bestScore = 1000;
  Object.keys(scorecard).every((key) => {
    //incase of tie
    if (scorecard[key].roundScore === bestScore)
      bestPlayer = [...bestPlayer, key];
    //incase of better score
    if (scorecard[key].roundScore < bestScore) {
      bestScore = scorecard[key].roundScore;
      bestPlayer = [key];
    }
    console.log(bestPlayer);
    return bestPlayer;
  });

  return (
    <div className="winner">
      <div className="winner__header">
        <img
          className="winner__header--img"
          src="/imgs/success.png"
          alt="trophy"
        />
        <p className="winner__header--name"> {bestPlayer.join(" ")}</p>
      </div>
      <div className="winner__cards">
        {Object.entries(scorecard).map((entry) => {
          let playerName = entry[0];
          let playerData = entry[1];
          return (
            <div className="winner__cards__card" key={playerName}>
              <img
                className="winner__cards__card--img"
                src={"/imgs/birds/" + playerData.birdImg + ".png"}
                alt="bird"
              />
              <p className="winner__cards__card--birdies">
                {playerData.birdieCount}
              </p>
              <p className="winner__cards__card--name">{playerName}</p>
              <p className="winner__cards__card--round">
                {playerData.roundScore}
              </p>
            </div>
          );
        })}
      </div>
      <div className="winner__footer">
        <Link
          className="winner__footer--exit"
          onClick={() => dispatch(resetRedux())}
          to="/"
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
}

export default Winner;
