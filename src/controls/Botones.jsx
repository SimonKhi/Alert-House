import styled from "styled-components";
import theme from "../theme";

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

    /* &:hover {
        background: #f9f7f7;
        color: rgb(226, 226, 226);
    } */
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

const BotonSensor = styled.button`
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;
`;

const BotonAgregar = styled.div`
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    color: white;
    background: ${theme.borde};
    border: 5px solid ${theme.borde};
`;

export {BotonActivado, BotonDesactivado, BotonSensor, BotonAgregar};