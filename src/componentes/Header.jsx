import styled from "styled-components";
import theme from "../theme";
import Icono from "../imagenes/icono.png";

const Header = () => {
    return (
        <ContenedorHeader>
            {/* <div> */}
                <Imagen src={Icono} alt="" />
                <Titulo>Alert house</Titulo>
            {/* </div> */}
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    /* background-color: #001011; */
`;

const Titulo = styled.h2`
    color: ${theme.titulo};
    font-size: 26px;
    letter-spacing: 3px;
`;

const Imagen = styled.img`
    /* display: block; */
    height: 70%;
    padding-right: 10px;
`;

export default Header;