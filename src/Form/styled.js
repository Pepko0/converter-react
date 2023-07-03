import styled from "styled-components";

export const Converter = styled.fieldset`
    border-radius: 5px;
    margin: unset;
    background: white;
`;

export const FormBody = styled.form`
    max-width: 750px;
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
    width: 184px;
    display: inline-block;
    font-size: 18px;
`;

export const Field = styled.select`
    font-size: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    width: 100%;
    max-width: 325px;
    border-radius: 5px;
    text-align: center; 

    &:hover {
    border: 1px solid;
    cursor: pointer;
    }
`;

export const FieldInput = styled.input`
    font-size: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    width: 100%;
    max-width: 325px;
    border-radius: 5px;
    text-align: center; 

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
    font-size: 20px;
`;

export const Error = styled.p`
    font-size: 20px;
`;