import styled from "styled-components";

export const Box = styled.label`
    display: grid;
    grid-template-columns: auto;
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 25px;
    margin: auto;

    @media(max-width: 767px) {
        font-size: 20px;
        margin-top: 20px;
    }
`;

export const Numbers = styled.span`
    font-size: 30px;
    padding: 10px;
    margin:  10px auto;
    text-align: center;

    @media(max-width: 767px) {
        font-size: 25px;
    }
`;