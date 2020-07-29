import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ className, cart, setCart, total, subTotal, deliveryFee }) => {
  return (
    <div className={className}>
      <button className="cartValidate">Valider mon panier</button>
      <div className="cartList">
        {cart.map((item, index) => {
          return (
            <div key={index}>
              <div className="cartItem cartLine">
                <div className="cartItemCount">
                  <span
                    className="cartItemCountButton"
                    onClick={() => {
                      const newCart = [...cart];
                      // Si la quantité est égale à 1, on supprime l'item du tableau cart
                      if (item.quantity === 1) {
                        newCart.splice(index, 1);
                      } else {
                        newCart[index].quantity--;
                      }
                      setCart(newCart);
                    }}
                  >
                    <FontAwesomeIcon icon="minus-circle" />
                  </span>
                  <span className="cartItemCountQuantity">{item.quantity}</span>
                  <span
                    className="cartItemCountButton"
                    onClick={() => {
                      const newCart = [...cart];
                      newCart[index].quantity++;
                      setCart(newCart);
                    }}
                  >
                    <FontAwesomeIcon icon="plus-circle" />
                  </span>
                </div>
                <span className="cartItemCountTitle">{item.title}</span>
                <span className="cartItemPrice">
                  {(Number(item.price) * item.quantity).toFixed(2)} €
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cartSubTotalCalculate ">
        <div className="cartSubTotal cartSubTotalLine">
          <span>Sous-total</span>
          <span className="cartItemPrice">{subTotal.toFixed(2)} €</span>
        </div>
        <div className="cartDeliveryFee cartSubTotalLine">
          <span>Frais de livraison</span>
          <span className="cartItemPrice">{deliveryFee} €</span>
        </div>
      </div>
      <div className="cartTotal cartLine cartTotalLine">
        <span>Total</span>
        <span className="cartItemPrice">{total.toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Cart;
