import "../pages/Scoring/scoring.scss";

function PlayerCard({ idx, playerData, playerName, holeScore, setHoleScores }) {
  const increment = (player) => {
    setHoleScores((prevState) => {
      let prevAmount = prevState[player];
      return { ...prevState, [player]: prevAmount + 1 };
    });
  };

  const decrement = (player) => {
    setHoleScores((prevState) => {
      let prevAmount = prevState[player];
      if (prevAmount > 0) {
        return { ...prevState, [player]: prevAmount - 1 };
      }
      return prevState;
    });
  };

  return (
    <div className="scoring__player--card">
      <img
        className="scoring__player--card--img"
        src={"/imgs/birds/" + playerData.birdImg + ".png"}
        alt="bird"
      />
      <p className="scoring__player--card--birdies">{playerData.birdieCount}</p>
      <p className="scoring__player--card--name">{playerName}</p>
      <div className="scoring__player--card--btnWrapper">
        <button
          className="scoring__player--card--btnWrapper scoring__player--card--btnWrapper--btn"
          onClick={() => increment(playerName)}
        >
          +
        </button>
        <button
          className="scoring__player--card--btnWrapper scoring__player--card--btnWrapper--btn"
          onClick={() => decrement(playerName)}
        >
          <p>-</p>
        </button>
      </div>
      <p className="scoring__player--card--throws">{holeScore}</p>
    </div>
  );
}

export default PlayerCard;
