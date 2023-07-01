import { useState } from 'react';
import Result from "./Result";
import Timer from "./Timer";
import { Converter, FormBody, Title, Text, Field, FieldInput, Button } from './styled';
import { useRatesData } from "./useRatesData";



const Form = () => {

  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

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
              {!!ratesData.rates && Object.keys(ratesData.rates).map((currency => (
                <option
                  key={currency}
                  value={currency}
                >
                  {currency}
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