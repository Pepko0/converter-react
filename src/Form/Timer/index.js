import "./style.css";
import { useCurrentDate } from './useCurrentDate';

const Timer = () => {
    const {time, formattedDate}  = useCurrentDate()

    return (
        <p
            className="time"
        >
            Dziś jest: {time.toLocaleDateString(undefined, formattedDate)}
        </p>
    );
}
export default Timer;