import appReducer from "./appReducers";

const rootReducer = (state, action) => {
  if (action.type === "RESET_REDUX") {
    return (state = undefined);
  }
  return appReducer(state, action);
};

export default rootReducer;
