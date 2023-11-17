import styled from "styled-components";
import theme from "../theme";
import Icono from "../images/icono.webp";
import BotonUsuario from "./BotonUsuario";
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from "react";

const Header = () => {
    const {usuario} = useAuth();
    const [estado, cambiarEstado] = useState(false);
    const [nombre, cambiarNombre] = useState('');

    useEffect(() => {
        if(usuario){
            cambiarEstado(true)
            cambiarNombre(usuario.email.split('@')[0]);
        }else {
            cambiarEstado(false)
            cambiarNombre('');
        }
    }, [usuario]);

    return (
        <ContenedorHeader user={estado} >
            {(estado) ? <Relleno></Relleno> : <></>}
            <Logo href="/" >
                <Imagen src={Icono} alt="" />
                <Titulo>Alert house</Titulo>
            </Logo>
            {(estado) ? <BotonUsuario nombre={nombre}/> : <></>}
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    max-width: 100vw;
    padding: ${(props) => props.user === true ? '0rem 2.5rem 0rem 2.5rem': '0px'};
    /* background-color: #001011; */

    @media (max-width: 767px) {
        padding: 0px 15px 0px 15px;
    }
`;

const Relleno = styled.div`
    width: 135px;
    
    @media (max-width: 767px) {
        width: 0;
    }
`;

const Titulo = styled.h2`
    color: ${theme.titulo};
    font-size: 26px;
    letter-spacing: 3px;
`;

const Imagen = styled.img`
    height: 70%;
    padding-right: 10px;
`;

const Logo = styled.div`
    display: flex;
    height: 55px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    @media(max-width: 767px) {
        justify-content: right;
        margin-left: 0;
    }
`;

export default Header;