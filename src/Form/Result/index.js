import {Box, Title, Numbers} from "./styled.js";


const Result = ({ result }) => {

    return (
        <p>
            <Box>
                <Title>Otrzymasz:</Title>
                <Numbers>
                    {result && (
                        <>
                            {result.sourceAmount.toFixed(2)} PLN = 

                            {result.targetAmount.toFixed(2)}{ result.currency}

                        </>
                    )}
                </Numbers>
            </Box>
        </p>
    )
}

export default Result;