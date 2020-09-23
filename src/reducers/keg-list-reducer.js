export default (state = {}, action) => {
  const { name, price, abv, description, pints, id } = action;
  switch (action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          abv: abv,
          description: description,
          id: id,
          pints: pints,
        },
      });
    case "DELETE_KEG":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
