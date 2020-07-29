import React from "react";

const EmptyCart = ({ className }) => {
  return (
    <div className={className}>
      <button className="cartDisabled" disabled>
        Valider mon panier
      </button>
      <span className="emptyCart">Votre panier est vide</span>
    </div>
  );
};

export default EmptyCart;
