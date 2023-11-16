import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const BotonUsuario = () => {
    const navigate = useNavigate();

    const cerrarSesion = async () => {
        try{
            await signOut(auth);
            navigate('/iniciar-sesion');
        }catch(error) {
            console.log(error);
        }
    }

    return (
        <Boton onClick={cerrarSesion}>
            Cerrar Sesión
        </Boton>
    );
}

const Boton = styled(Link)`
    display: flex;
    text-align: end;
    width: 105px;

    @media(max-width: 540px) {
        width: 55px;
    }
`;
 
export default BotonUsuario;