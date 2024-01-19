import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard, { PormotedCards } from './RestCard';
import { Link } from 'react-router-dom';
import Shimmer from './shimmer';
import Isonline from '../utils/onlineCustomHook';
import UserContext from '../utils/usercontext';
import { Home_Url } from '../utils/constents';

// let restList = ;
const Body = () => {
  let [restList, setRestList] = useState([]);
  let [filetdata, setFilerData] = useState([]);
  let [searchText, setSearchText] = useState('');
  let PCards = PormotedCards(RestaurantCard);
  let { loggedInUser, setUsername } = useContext(UserContext);
  console.log('testing');
  useEffect(() => {
    fetchData();
  }, []);

  if (Isonline() === false) {
    return <h1>ur in offline please check once</h1>;
  }
  const fetchData = async () => {
    let apiData = await fetch(Home_Url);
    let finalData = await apiData.json();
    setRestList(
      finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilerData(
      finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return restList.length > 0 ? (
    <div>
      <div className="body">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilerData(
              restList.filter((item) =>
                item.info.name.toLowerCase().includes(filet.toLowerCase())
              )
            );
            serFilet('');
          }}
        >
          filer by name
        </button>
        <button
          onClick={() =>
            setFilerData(restList.filter((item) => item.info.avgRating < 4.3))
          }
        >
          filter below 4.3 rating products
        </button>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="rest-container">
          {filetdata.map((item, index) =>
            item.info.sla.deliveryTime >= 30 ? (
              <Link to={'/restmenu/' + item.info.id} key={item.info.id}>
                <PCards restItems={item.info} />
              </Link>
            ) : (
              <Link to={'/restmenu/' + item.info.id} key={item.info.id}>
                <RestaurantCard restItems={item.info} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
