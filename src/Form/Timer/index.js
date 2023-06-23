import {Time} from "./styled";
import { useCurrentDate } from './useCurrentDate';

const Timer = () => {
    const {time, formattedDate}  = useCurrentDate()

    return (
        <Time
        >
            Dziś jest: {time.toLocaleDateString(undefined, formattedDate)}
        </Time>
    );
}
export default Timer;