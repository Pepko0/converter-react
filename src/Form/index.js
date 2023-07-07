import { useState } from 'react';
import Result from "./Result";
import Timer from "./Timer";
import { Converter, FormBody, Title, Text, Field, FieldInput, Button, Loading, Error, Footer, SelectionContainer, Container } from './styled';
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

  const currencyDate = ratesData.date


  return (

    <FormBody
      onSubmit={onSubmit}
    >
      <Converter>
        <Title>
          Kantor
        </Title>


        {ratesData.status === "loading" ? (
          <>
            <Loading>
              Jeszcze chwilka, Pobieramy aktualne stawki walut na dzisiejszy dzień
            </Loading>
          </>

        ) : (
          ratesData.status === "error" ? (
            <Error>
              Coś posżło nie tak... Sprwadź połączenie z internetem! Jeśli wszystko jes podłączone... Pracujemy nad poprawą błędu! Zajrzyj do nas za chwilę ;D
            </Error>

          ) : (
            <>
              <Timer />
              <SelectionContainer>
                <Container>
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
                </Container>
                <Container>
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
                </Container>

                <Text>* - Pola obowiązkowe</Text>

                <Result
                  result={result}
                />
              </SelectionContainer>
              <Button>Przelicz</Button>

              <Footer>
                Kursy walut aktualny na dzień<b> {currencyDate}</b>
              </Footer>
            </>

          )
        )
        }
      </Converter>

    </FormBody>
  );
}

export default Form;