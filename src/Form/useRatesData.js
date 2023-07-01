import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {

        const axiosRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const { rates, data } = response.data;

                setRatesData({
                    status: "success",
                    rates,
                    data,
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