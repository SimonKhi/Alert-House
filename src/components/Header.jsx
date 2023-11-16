import styled from "styled-components";
import theme from "../theme";
import Icono from "../images/icono.png";
import BotonUsuario from "./BotonUsuario";
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from "react";
import { OmitProps } from "antd/es/transfer/ListBody";

const Header = () => {
    const {usuario} = useAuth();
    const [estado, cambiarEstado] = useState(false);

    useEffect(() => {
        if(usuario){
            cambiarEstado(true)
        }else {
            cambiarEstado(false)
        }
    }, [usuario]);

    return (
        <ContenedorHeader user={estado} >
            <Logo href="/" >
                <Imagen src={Icono} alt="" />
                <Titulo>Alert house</Titulo>
            </Logo>
            {(estado) ? <BotonUsuario /> : <></>}
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    max-width: 100vw;
    padding: ${(props) => props.user === true ? '0px 15px 0px 120px': '0px'};
    /* background-color: #001011; */

    @media (max-width: 540px) {
        padding: 0px 15px 0px 15px;
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
    color: red;
`;

const Logo = styled.div`
    display: flex;
    height: 55px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    @media(max-width: 540px) {
        justify-content: right;
        margin-left: 0;
    }
`;

export default Header;