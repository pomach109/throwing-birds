import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./stats.scss";

function Stats() {
  const scorecard = useSelector((state) => state.scorecard);

  return (
    <div className="stats">
      <div className="stats__wrapper">
        {Object.entries(scorecard).map((entry) => {
          let playerName = entry[0];
          let playerData = entry[1].throwSerie;
          let birdImg = entry[1].birdImg;
          return (
            <div className="stats__wrapper__card" key={playerName}>
              <div className="stats__wrapper__card__player">
                <img
                  className="stats__wrapper__card__player--img"
                  src={"/imgs/birds/" + birdImg + ".png"}
                  alt="bird"
                />
                <p className="stats__wrapper__card__player--birdies">
                  {scorecard[playerName].birdieCount}
                </p>
                <p className="stats__wrapper__card__player--name">
                  {playerName}
                </p>
                <p className="stats__wrapper__card__player--tot">
                  {scorecard[playerName].roundScore}
                </p>
              </div>
              <div className="stats__wrapper--nines">
                {playerData.slice(0, 9).map((el, i) => {
                  return <p key={i}>{el}</p>;
                })}
              </div>
              <div className="stats__wrapper--nines">
                {playerData.slice(9, 18).map((el, i) => {
                  return <p key={i}>{el}</p>;
                })}
              </div>
              <div className="stats__wrapper--nines">
                {playerData.slice(18, 27).map((el, i) => {
                  return <p key={i}>{el}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats__footer">
        <Link to="/scoring" className="stats__footer--btn">
          &larr;
        </Link>
      </div>
    </div>
  );
}

export default Stats;
