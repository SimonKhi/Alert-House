import styled from "styled-components";

const BotonActivado = styled.button`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    margin-top: 5%;
    margin-bottom: 5%;

    &:hover {
        background: #f9f7f7;
        color: rgb(111, 111, 111);
    }
`;

const BotonDesactivado = styled.button`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    margin-top: 5%;
    margin-bottom: 5%;
    color: rgb(111, 111, 111);
`;

export {BotonActivado, BotonDesactivado}