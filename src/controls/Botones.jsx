import styled from "styled-components";
import { Link } from "react-router-dom";
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

    &:hover {
        background-color: rgb(255, 245, 245);
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
    color: rgb(41, 41, 41);
    
    &:hover {
        color: rgb(111, 111, 111);
    }
`;

const BotonSensor = styled.button`
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;

    /* &:hover {
        background: rgb(243, 243, 243);
    } */
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

    &:hover{
        /* background: rgb(111, 111, 111); */
        color: rgb(235, 235, 235);
    }
`;

const BotonLink = styled(Link)`
    display: inline-flex;
    column-gap: 0.5rem;
    align-items: center;
    font-size: larger;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    max-width: 135px;
    border: none;

    :hover {
        color: gray;
    }

    @media(max-width: 481px) {
        width: ${(props) => props.seleccion ? '135px' : '30px'};
    }
`;

const BotonTexto = styled.span`
    @media (max-width: 481px) {
        display: none;
    }
`;
export { BotonActivado, BotonDesactivado, BotonSensor, BotonAgregar, BotonLink, BotonTexto };