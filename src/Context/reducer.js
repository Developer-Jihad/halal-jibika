const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favJobs: [...state.favJobs, payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favJobs: [...state.favJobs].filter((job) => job.id !== payload),
      };

    default:
      return state;
  }
};

export default reducer;
