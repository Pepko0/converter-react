import styled from "styled-components";

export const Time = styled.p`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: row-reverse;
    margin: 10px;
    margin-bottom: 40px;
    font-size: 18px;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 15px;
        text-align: center;
    }
`;