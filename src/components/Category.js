import React from "react";
import Meal from "./Meal";

const Category = ({ className, category, cart, setCart, addItem }) => {
  const meals = category.meals;
  return (
    <div className="categoryContainer">
      <div className={className}>
        {meals.length > 0 && (
          <div className={className}>
            <h2>{category.name}</h2>
            <div className="meals">
              {meals.map((meal, index) => {
                return (
                  <Meal
                    key={index}
                    meal={meal}
                    className="meal card"
                    addItem={addItem}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
