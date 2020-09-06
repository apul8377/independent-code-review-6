import React from "react";

function Ticket() {
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{abv}</h3>
      <h3>{description}</h3>

      <hr />
    </React.Fragment>
  );
}

export default Ticket;
