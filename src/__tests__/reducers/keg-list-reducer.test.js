import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {
  let action;
  const kegData = {
    name: "Coors Light",
    price: "5",
    abv: "4.5",
    description: "Cold as the Rockies",
    id: 1,
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test("Should add a keg to KegList", () => {
    const { name, price, abv, description, id } = kegData;
    action = {
      type: "ADD_KEG",
      name: name,
      price: price,
      abv: abv,
      description: description,
      id: id,
    };
  });
  expect(kegListReducer({}, action)).toEqual({
    [id]: {
      name: name,
      price: price,
      abv: abv,
      description: description,
      id: id,
    },
  });
});
