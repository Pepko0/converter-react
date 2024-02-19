import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        // const currentExchangeRate = "https://api.exchangerate.host/latest?base=PLN";
        const currentExchangeRate = "https://api.currencyapi.com/v3/latest?apikey=cur_live_9NYWBs5W9YeNB6yoiTeIUavyVn3gdH7eDN3GyugC"

        const axiosRates = async () => {
            try {
                const response = await axios.get(currentExchangeRate);
                const { code, value } = response.data;

                setRatesData({
                    status: "success",
                    code,
                    value,
                });
            } catch {
                setRatesData({
                    status: "error",
                });
            };
        };

        setTimeout(axiosRates, 1000);
    }, []);
   
    return ratesData;    
};