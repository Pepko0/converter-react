
const Result = ({ result }) => {

    return (
        <p>
            <label>
                <span className="converter__text">Otrzymasz:</span>
                <p>
                    {result !== undefined && (
                        <>
                        {result.sourceAmount.toFixed(2)} PLN = 
                        
                        {result.targetAmount.toFixed(2)}{result.currency}

                        </>
                    )}
                </p>
                

            </label>
        </p>
    )
}

export default Result;