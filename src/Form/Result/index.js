import "./style.css"


const Result = ({ result }) => {

    return (
        <p>
            <label className="result__box">
                <span className="result__title">Otrzymasz:</span>
                <span className="result">
                 
                    {result !== undefined && (
                        <>
                        {result.sourceAmount.toFixed(2)} PLN = 
                        
                        {result.targetAmount.toFixed(2)}{result.currency}

                        </>
                    )}
                    
                    </span>
                

            </label>
        </p>
    )
}

export default Result;