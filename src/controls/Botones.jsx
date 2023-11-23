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
    /* color: rgb(41, 41, 41); */
    color: ${theme.danube_900};
    
    &:hover {
        /* color: rgb(111, 111, 111); */
        color: ${theme.danube_600};
    }
`;

const BotonSensor = styled.button`
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        filter: sepia(30%);
    }
`;

const BotonAgregar = styled.div`
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    color: ${theme.danube_50};
    background: ${theme.danube_700};
    border: 5px solid ${theme.danube_700};

    &:hover{
        /* color: rgb(235, 235, 235); */
        color: ${theme.danube_700};
        background: ${theme.danube_50};
        border: 5px solid ${theme.danube_50};
    }
`;

const BotonLink = styled(Link)`
    display: inline-flex;
    column-gap: 0.5rem;
    align-items: center;
    font-size: large;
    text-decoration: none;
    color: ${theme.danube_950};
    cursor: pointer;
    max-width: 135px;
    border: none;

    :hover {
        color: ${theme.danube_800};
    }

    @media(max-width: 481px) {
        width: ${(props) => props.seleccion ? '135px' : '30px'};
    }
`;

const BotonLink1 = styled(Link)`
    display: inline-flex;
    column-gap: 0.5rem;
    align-items: center;
    font-size: medium;
    text-decoration: none;
    color: ${theme.danube_950};
    cursor: pointer;
    max-width: 135px;
    border: none;

    :hover {
        color: ${theme.danube_800};
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

const BotonOpcion = styled.button`
    outline: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    font-size: 25px;
    color: ${theme.danube_500};
    background: none;
    cursor: pointer;

    &:hover {
        color: ${theme.danube_800};
        background: ${theme.danube_50};
    }
`;

export { BotonActivado, BotonDesactivado, BotonSensor, BotonAgregar, BotonLink, BotonTexto, BotonLink1, BotonOpcion };