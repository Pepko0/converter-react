import { useState } from 'react';
import { currencies } from "../curriences";
import Result from "./Result";
import Timer from "./Timer";
// import "./style.css";
import { Converter, FormBody, Title, Text, Field, FieldInput, Button } from './styled';

const Form = ({ result, calculateResult }) => {

  const [currency, setCurrency] = useState(currencies[1].short);
  const [amount, setAmount] = useState("");



  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (

    <FormBody
      onSubmit={onSubmit}
    >
      <Converter>
        <Title>
          Kantor
        </Title>

        <Timer />

        <p>
          <label>
            <Text
              title="Pole obowiązkowe!"
            >
              Podaj kwotę w PLN*
            </Text>
            <FieldInput
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              required text="zł"
              type="number"
              min="1" />
          </label>
        </p>
        <p>
          <label>
            <Text>
              Wybierz walute
            </Text>
            <Field
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
            </Field>
          </label>
        </p>
        <Text>* - Pola obowiązkowe</Text>

        <Result
          result={result}
        />

      </Converter>

 
        <p>
        <Button>Przelicz</Button>
        </p>

    </FormBody>
  );
}
export default Form;