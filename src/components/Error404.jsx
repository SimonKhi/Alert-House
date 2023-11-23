import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Contenedor, ContenedorError } from './Dimensiones';
import { BotonRegresar } from '../controls/Botones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Error404 = () => {
    const navigate = useNavigate();

    return (
        <Contenedor>
            <ContenedorError>
                <Titulo>Error 404</Titulo>
                <Gesto>
                    ¯\_(ツ)_/¯ 
                </Gesto>
                <BotonRegresar onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} size='lg' style={{marginRight: '10px'}}/>
                    Regresar a Casa
                </BotonRegresar>
            </ContenedorError>
        </Contenedor>
    );
}

const Titulo = styled.h1`
    font-size: 50px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #442f2f;
    letter-spacing: 5px;
`;

const Gesto = styled.h2`
    font-size: 60px;
    font-weight: 900;
    color: black;
`;
 
export default Error404;