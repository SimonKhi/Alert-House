import React, { useEffect, useState } from "react";
import Icono from "../images/icono.webp";
import BotonUsuario from "./BotonUsuario";
import { useAuth } from '../context/AuthContext';
import { ContenedorHeader, Relleno, Titulo, Imagen, Logo  } from "./Dimensiones";

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
            <Logo>
                <Imagen src={Icono} alt="alert-house" />
                <Titulo>Alert house</Titulo>
            </Logo>
            {(estado) ? <BotonUsuario nombre={nombre}/> : <></>}
        </ContenedorHeader>
    );
}

export default Header;