const _initialState = {
  counter: 0,
  helpMsg: "Hello!"
};

export default (state = _initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return {
        ...state
      };
  }
};
