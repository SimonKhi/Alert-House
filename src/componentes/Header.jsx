import styled from "styled-components";
import theme from "../theme";
import Icono from "../imagenes/icono.png";

const Header = () => {
    return (
        <ContenedorHeader>
            <Logo href="/" >
                <Imagen src={Icono} alt="" />
                <Titulo>Alert house</Titulo>
            </Logo>
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    max-width: 100vw;
    /* background-color: #001011; */
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

const Logo = styled.a`
    display: flex;
    height: 55px;
    text-decoration: none;
    align-items: center;
`;

export default Header;