import { useState } from 'react';
import { currencies } from "../curriences";
import Result  from "./Result";

const Form = ({ result, calculateResult }) => {

  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }



  return (

    <form className="form" onSubmit={onSubmit}>
      <fieldset className="converter">
        <legend className="converter__title">Kantor</legend>

        <p>
          <label>
            <span title="Pole obowiązkowe!" className="converter__text">Podaj kwotę w PLN* </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="converter__field"
              required text="zł"
              type="number"
              min="1" />
          </label>
        </p>
        <p>
          <label>
            <span
              className="converter__text"

            >
              Wybierz walute
            </span>
            <select
              className="converter__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.short}
                </option>
              )))}
            </select>
          </label>
        </p>
        <p className="converter__text">* - Pola obowiązkowe</p>

        <Result
          result={result}
        />

      </fieldset>

      <div className="button--aligne" >
        <p>
          <button className="button">Przelicz</button>
          <button className="button" type="reset">Wyczyść formularz</button>
        </p>
      </div>
    </form>


  )
}
export default Form;