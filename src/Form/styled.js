import styled from "styled-components";

export const Converter = styled.fieldset`
    border-radius: 5px;
    margin: unset;
    background: white;
    padding: 20px;
`;

export const FormBody = styled.form`
    max-width: 950px;
    margin: 20px auto; 
    padding: 10px;
`;

export const Title = styled.legend`
    text-align: center;
    width: 300px;
    margin: 10px auto;
    font-size: 60px;
    border-radius: 5px;
    background: teal;
    color: white;
`;

export const Text = styled.span`
    font-size: 20px;    
`;

export const Field = styled.select`
    font-size: 20px;
    border: 1px solid #ccc;
    width: 350px;
    padding: 15px;
    border-radius: 5px;

    &:hover {
    border: 1px solid;
    cursor: pointer;
    }
`;

export const FieldInput = styled.input`
    font-size: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 5px;
    width: 350px;
    margin-left: 10px;

    &:hover {
    border: 1px solid;
    cursor: pointer;
    }
`;

export const Button = styled.button`
    text-align: center;
    width: 100%;
    margin: 5px auto;
    border: 1px solid teal;
    background: #9ac7c7;
    border-radius: 5px;
    font-size: 25px;
    height: 60px;
    font-weight: bold;

    &:hover {
    background: teal;
    color: white;
    cursor:pointer;
    }
`;

export const Loading = styled.p`
    font-size: 26px;
    color: teal;
    text-align: center;
    font-weight: bold;
`;

export const Error = styled.p`
    font-size: 20px;
    color: crimson;
    text-align: center;
`;

export const Footer = styled.p `
    text-align: center;
    font-size: 20px;
    
`;

export const Container = styled.div`
    /* border: solid 1px; */
    display: flex;
    justify-content: space-between;
    margin: 20px;
    ;

`;

export const SelectionContainer = styled.div`
    padding:0 105px;

    @media(max-width: 767px){
        padding: 0;
    }
`;