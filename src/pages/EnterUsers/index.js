import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPlayers } from "../../actions";
import { BIRD_IMAGES } from "../../reducers/appReducers";
import "./enterUsers.scss";

function EnterUsers() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const dispatch = useDispatch();

  const addPlayerCard = (e) => {
    e.preventDefault();
    if (players.length < 6) {
      setPlayers((prevPlayers) => {
        return [...prevPlayers, name];
      });
    } else alert("Max players 6");
    setName("");
  };

  const createScoreCard = () => {
    dispatch(addPlayers(players));
  };

  const playerCards = () => {
    return players.map((player, index) => (
      <div className="enterUsers__c__players--card" key={index}>
        <img
          className="enterUsers__c__players--card--img"
          src={"/imgs/birds/" + BIRD_IMAGES[index] + ".png"}
          alt="bird"
        />
        <p className="enterUsers__c__players--card--name">{player}</p>
      </div>
    ));
  };

  return (
    <div className="enterUsers__c">
      <div className="enterUsers__c__header">
        <p className="enterUsers__c__header--p">Enter contestants</p>

        <form
          className="enterUsers__c__header--form"
          id="player-form"
          onSubmit={addPlayerCard}
        >
          <input
            className="enterUsers__c__header--form--input"
            type="text"
            minLength={3}
            maxLength={10}
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="enterUsers__c__header--form--submit" type="submit">
            &#x2714;
          </button>
        </form>
      </div>
      <div className="enterUsers__c__players">{playerCards()}</div>
      <div className="enterUsers__c__footer">
        <Link
          to="/scoring"
          className="enterUsers__c__footer--btn"
          onClick={createScoreCard}
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
}

export default EnterUsers;
