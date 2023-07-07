import { Box, Title, Numbers } from "./styled.js";


const Result = ({ result }) => {

    return (
        <p>
            <Box>
                <Title>Otrzymasz:</Title>
                <Numbers>
                    {result && (
                        <>
                            {result.sourceAmount.toFixed(2)} PLN =&nbsp;
                            <strong>
                                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                            </strong>
                        </>
                    )}
                </Numbers>
            </Box>
        </p>
    )
}

export default Result;