import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rest_Menu } from '../utils/constents';
import Shimmer from './shimmer';
import Restcardcatg from './restcardcatg';

const RestMenu = () => {
  let [restDetails, setRestroDeatils] = useState(null);
  let [itemCards, setItemCards] = useState([]);
  let { restid } = useParams();
  let [showIndex, setindex] = useState(null);

  console.log(restid, 'userParams');
  useEffect(() => {
    fetchData();
  }, [restid]);
  let fetchData = async () => {
    const Url = Rest_Menu.replace('menuid', restid);
    let dataFetch = await fetch(Url);
    let dataJson = await dataFetch.json();
    // console.log(
    //   dataJson?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    // );
    let itemCardsData =
      dataJson?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (item) =>
          item?.card?.card['@type'] ==
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
      );
    setItemCards(itemCardsData);
    setRestroDeatils(dataJson?.data?.cards[0].card.card.info);
    // console.log(itemCards);
    // console.log(dataJson?.data?.cards[0].card.card.info);
  };

  return restDetails === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{restDetails.name}</h1>
      <h4>{restDetails.locality}</h4>
      <h4>{restDetails.cuisines.join(', ')}</h4>
      <div>
        {itemCards ? (
          itemCards.map((item, index) => (
            <Restcardcatg
              key={item.card.card.title}
              categ={item}
              toggle={index === showIndex ? true : false}
              setshowindex={() =>
                setindex((value) => (value === index ? null : index))
              }
            />
          ))
        ) : (
          <h1>data not present</h1>
        )}
      </div>
    </div>
  );
};

export default RestMenu;
