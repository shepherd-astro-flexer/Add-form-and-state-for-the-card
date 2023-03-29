import React from "react";
import PropTypes from "prop-types";

function FrontCard(props) {
  return (
    <div className="front-card">
      <img className="card-logo" src="../../images/card-logo.svg" alt="card-logo" />
      <p className="card-number">{props.cardNumber}</p>
      <div className="card-bottom-container">
        <p className="card-name">{props.cardName}</p>
        <div className="card-expiration-container">
          <p className="card-expiration-month">{props.cardMonth}<span>/</span></p>
          <p className="card-expiration-year">{props.cardYear}</p>
        </div>
      </div>
    </div>
  )
}

FrontCard.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardYear: PropTypes.string,
  cardMonth: PropTypes.string,
}

function BackCard(props) {
  return (
    <div className="back-card">
      <p className="card-cvc">{props.cardCvc}</p>
    </div>
  )
}

BackCard.propTypes = {
  cardCvc: PropTypes.string
}

export default FrontCard;
export { BackCard };