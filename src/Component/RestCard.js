import React from 'react';
import { Rest_Img } from '../utils/constents';

const RestaurantCard = (props) => {
  let { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    props.restItems;
  // console.log(props.restItems, 'resid');
  return (
    <div className="rest-card">
      <img src={Rest_Img + cloudinaryImageId} alt="img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export const PormotedCards = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>more then 30 min will delivery</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
