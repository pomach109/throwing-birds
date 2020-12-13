const resetRedux = () => {
  return {
    type: "RESET_REDUX",
  };
};

const addPlayers = (players) => {
  console.log("[fr addPlayers action]");
  return {
    type: "ADD_PLAYERS",
    payload: players,
  };
};

const addThrows = (holeThrows) => {
  console.log("[fr addThrows action]");
  return {
    type: "ADD_THROWS",
    payload: holeThrows,
  };
};

const addCoursePar = (holePar) => {
  console.log("[fr addCoursePar action]");
  return {
    type: "ADD_COURSEPAR",
    payload: holePar,
  };
};

const calcRoundScores = (holeThrows, holePar) => {
  console.log("[fr calcRoundScores action]");
  return {
    type: "CALC_ROUNDSCORES",
    payload: {
      holeThrows: holeThrows,
      holePar: holePar,
    },
  };
};

const nextHole = (holeNumber) => {
  console.log("[fr nextHole action]");
  return {
    type: "NEXT_HOLE",
    payload: holeNumber,
  };
};

const newGameModes = () => {
  return {
    type: "NEW_GAMEMODES",
  };
};

export {
  resetRedux,
  addPlayers,
  addThrows,
  addCoursePar,
  calcRoundScores,
  nextHole,
  newGameModes,
};
