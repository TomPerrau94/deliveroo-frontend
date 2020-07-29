import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ className, meal, addItem }) => {
  return (
    <div
      className={className}
      onClick={() => {
        addItem(meal);
      }}
    >
      <div className="mealInfos">
        <h3 className="mealTitle">{meal.title}</h3>
        {meal.description && (
          <p className="mealDescription">{meal.description}</p>
        )}
        <div className="mealMoreInfos">
          <span className="mealPrice">{meal.price.replace(".", ",")} €</span>
          {meal.popular && (
            <span className="mealPopular">
              <FontAwesomeIcon icon="star" />
              Populaire
            </span>
          )}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt=""></img>}
    </div>
  );
};

export default Meal;
