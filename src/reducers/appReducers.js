import { combineReducers } from "redux";

const BIRD_IMAGES = ["bird1", "bird2", "bird3", "bird4", "bird5", "bird6"].sort(
  () => Math.random() - 0.5
);
export { BIRD_IMAGES };

const initRoundData = {
  date: "",
  course: "",
  coursePar: [],
  winner: [],
  scorecard: {},
};

const initScoreCard = {
  throwSerie: [],
  roundScore: 0,
  birdieCount: 0,
  birdImg: "",
};

const roundReducer = (state = initRoundData, action) => {
  switch (action.type) {
    case "ADD_COURSEPAR":
      let newRoundData = { ...state };
      newRoundData.coursePar = [...state.coursePar, action.payload];
      return newRoundData;

    default:
      return state;
  }
};

const scorecardReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PLAYERS": {
      let newScorecard = { ...state };
      action.payload.forEach((name, i) => {
        newScorecard = {
          ...newScorecard,
          [name]: { ...initScoreCard, birdImg: BIRD_IMAGES[i] },
        };
      });
      return newScorecard;
    }

    case "ADD_THROWS": {
      let newScorecard = { ...state };
      Object.entries(action.payload).forEach((entry) => {
        let player = entry[0];
        let throws = entry[1];
        newScorecard[player] = {
          ...state[player],
          throwSerie: [...state[player].throwSerie, throws],
        };
      });
      return newScorecard;
    }

    case "CALC_ROUNDSCORES": {
      let newScorecard = { ...state };
      let holepar = action.payload.holePar;

      Object.entries(action.payload.holeThrows).forEach((entry) => {
        let player = entry[0];
        let throws = entry[1];
        let oldRoundScore = state[player].roundScore;
        let oldBirdieCount = state[player].birdieCount;

        newScorecard[player] = {
          ...state[player],
          roundScore: oldRoundScore + (throws - holepar),
        };

        if (throws - holepar < 0) {
          newScorecard[player] = {
            ...newScorecard[player],
            birdieCount: oldBirdieCount + 1,
          };
        }
      });
      return newScorecard;
    }

    default:
      return state;
  }
};

//------------------------------------

const currentHoleReducer = (state = 1, action) => {
  var currentHole = state;
  switch (action.type) {
    case "NEXT_HOLE":
      return currentHole + 1;
    case "PREV_HOLE":
      return currentHole - 1;

    default:
      return state;
  }
};

const randomInfoSamples = () => {
  const gameModes = {
    tee: ["hyzer", "anhyzer", "overhead", "forehand", "backhand", "putter"],
    two: ["opponents choice", "second", "first"],
    limit: ["driver", "midrange", "fairway driver"],
    subtr: ["F roller", "B roller", "grenade", "other hand"],
    drink: ["tree hit", "turnover", "missed putt", "par"],
  };
  const getRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  let samples = {};
  Object.keys(gameModes).every((key) => {
    return (samples[key] = getRandom(gameModes[key]));
  });
  return samples;
};

const gameModesReducer = (state = randomInfoSamples(), action) => {
  switch (action.type) {
    case "NEW_GAMEMODES":
      let newMode = randomInfoSamples();
      return newMode;
    default:
      return state;
  }
};

export default combineReducers({
  round: roundReducer,
  scorecard: scorecardReducer,
  currentHole: currentHoleReducer,
  gameModes: gameModesReducer,
});
