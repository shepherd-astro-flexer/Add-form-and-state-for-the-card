import React, { useState } from "react";
import FrontCard, { BackCard } from "./Card";
import Input, { Label } from "./Input";

function App() {
  const [cardValue, setCardValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [cvcValue, setCvcValue] = useState("");


  function cardChange(e) {
    setCardValue(e.target.value);
  }

  function nameChange(e) {
    setNameValue(e.target.value.toUpperCase());
  }

  function monthChange(e) {
    setMonthValue(e.target.value);
  }

  function yearChange(e) {
    setYearValue(e.target.value);
  }

  function cvcChange(e) {
    setCvcValue(e.target.value);
  }

  return (
    <div>
      <div>
        <FrontCard 
          cardName={nameValue === "" ? "FELICIA LEIRE" : nameValue} 
          cardNumber={cardValue === "" ? "9591 6489 6389 101E" : cardValue}
          cardYear={yearValue === "" ? "00" : yearValue}
          cardMonth={monthValue === "" ? "09" : monthValue}
        />
        <BackCard 
          cardCvc={cvcValue === "" ? "000" : cvcValue}
        />
      </div>
      <form className="card-user-credentials">
        <Label name="CARDHOLDER NAME" /><br />
        <Input max="32" value={nameValue} change={nameChange} placeholder="e.g. Jane Appleseed" />
        <Label name="CARD NUMBER" /><br />
        <Input max="19" value={cardValue} change={cardChange} placeholder="e.g. 1234 5678 9123 0000" />
        <div className="form-bottom-section">
          <div className="left-section">
            <Label name="EXP. DATE (MM/YY)" /><br />
            <div className="exp-date-container">
              <Input max="2" placeholder="MM" value={monthValue} change={monthChange} class="margin-left" />
              <Input max="2" placeholder="YY" value={yearValue} change={yearChange} />
            </div>
          </div>
          <div className="right-section">
            <Label max="3" placeholder="e.g. 123" value={cvcValue} change={cvcChange} name="CVC" /><br />
            <Input />
          </div>
        </div>
      </form>
    </div>
  )
}

export default App;