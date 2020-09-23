import * as c from "./ActionTypes";

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const addKeg = (keg) => {
  const { name, price, abv, description, id, pints } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    price: price,
    abv: abv,
    id: id,
    description: description,
    pints: pints,
  };
};
