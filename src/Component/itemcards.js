import React, { useState } from 'react';

const ItemCards = (props) => {
  let { items } = props;
  return items.map((value) => (
    <div key={value.card.info.name}>
      <div>{value.card.info.name}</div>
      <div>
        {value.card.info.defaultPrice
          ? value.card.info.defaultPrice / 100
          : value.card.info.price / 100}
      </div>
    </div>
  ));
};

export default ItemCards;
