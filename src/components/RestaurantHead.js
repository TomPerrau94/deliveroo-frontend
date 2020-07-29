import React from "react";

const RestaurantHead = ({ className, restaurant }) => {
  return (
    <div className={className}>
      <div className="restaurantInfos">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
      <img className="restaurantCover" src={restaurant.picture} alt=""></img>
    </div>
  );
};

export default RestaurantHead;
