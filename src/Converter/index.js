import "./style.css";


const Converter = () => (
    <fieldset className="converter">
        <legend className="converter__title">Kantor</legend>

        <p>
            <label>
                <span title="Pole obowiązkowe!" className="converter__text">Podaj kwotę w PLN* </span>
                <input className="converter__field" required text="zł" type="number" min="1" />
            </label>
        </p>
        <p>
            <label>
                <span className="converter__text">
                    Wybierz walute
                </span>
                <select className="converter__field">
                    <option title="4.48" value="USD">Dolar - USD</option>
                    <option title="4.74" value="EUR">Euro - EUR</option>
                    <option title="5.35" value="GBP">Funt - GBP</option>
                    <option title="0.033" value="JPY">Jen - JPY</option>
                </select>
            </label>
        </p>
        <p>
            <label>
                <span className="converter__text">Otrzymasz:</span>
                <input className="converter__field--important" name="disabled" disabled />
            </label>
        </p>
        <p className="converter__text">* - Pola obowiązkowe</p>
    </fieldset>
);
export default Converter;