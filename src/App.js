import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import RestaurantHead from "./components/RestaurantHead";
import Category from "./components/Category";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlusCircle, faMinusCircle);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const deliveryFee = "2,50";

  let subTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    subTotal += Number(cart[i].price) * cart[i].quantity;
  }

  let total = Number(deliveryFee.replace(",", ".")) + subTotal;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-tom.herokuapp.com/data"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("Data loaded");
  }, []);

  const restaurant = data.restaurant;
  const categories = data.categories;

  const addItem = (meal) => {
    const newCart = [...cart];
    let itemExists = false;
    const newCartItem = {
      title: meal.title,
      price: meal.price,
      quantity: 1,
      id: meal.id,
    };

    for (let i = 0; i < newCart.length; i++) {
      if (meal.id === newCart[i].id) {
        itemExists = true;
        newCart[i].quantity++;
        break;
      }
    }

    if (!itemExists) {
      newCart.push(newCartItem);
      setCart(newCart);
      console.log(newCart);
    }

    // Mise à jour du state avec la copie
    setCart(newCart);
  };

  return isLoading ? (
    <span>Data is loading</span>
  ) : (
    <div className="App">
      <header>
        <Header className="header" />
      </header>
      <main>
        <div className="container">
          <RestaurantHead className="restaurantHead" restaurant={restaurant} />
        </div>
        <div className="mainContent">
          <div className="container splitContent">
            <div className="categoriesContainer">
              {categories.map((category, index) => {
                return (
                  <Category
                    className="category"
                    key={index}
                    category={category}
                    cart={cart}
                    setCart={setCart}
                    addItem={addItem}
                  />
                );
              })}
            </div>
            <div className="cartContainer">
              {cart.length > 0 ? (
                <Cart
                  className="cart card"
                  cart={cart}
                  setCart={setCart}
                  subTotal={subTotal}
                  deliveryFee={deliveryFee}
                  total={total}
                />
              ) : (
                <EmptyCart className="cart card" />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
