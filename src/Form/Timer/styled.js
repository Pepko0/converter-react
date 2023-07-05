import styled from "styled-components";

export const Time = styled.p`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: row-reverse;
    margin: 20px;
    font-size: 18px;

    @media(max-width: 767px) {
        font-size: 13px;
        text-align: center;
    }
`;