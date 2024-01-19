import React, { useState } from 'react';
import ItemCards from './itemcards';

const Restcardcatg = ({ categ, toggle, setshowindex }) => {
  // let { categ } = props;
  // let [toggle, settoggle] = useState(false);
  let changeToggle = () => {
    // settoggle(!toggle);
    setshowindex();
  };
  return (
    <div>
      <h5 onClick={changeToggle}>
        {categ.card.card.title} --- {categ.card.card.itemCards.length}
      </h5>
      {toggle && <ItemCards items={categ.card.card.itemCards} />}
    </div>
  );
};
export default Restcardcatg;
