import styled from "styled-components";
import theme from "../theme";

const Superior = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 1023px) {
        display: block;
    }
`;

const ContenedorControles = styled.div`
    flex: 6;
    padding: 15px;
`;

const ContenedorAlarma = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    flex: 3;
`;

const ContenedorSensores = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    column-gap: 45px;
    row-gap: 15px;
    padding: 15px;
    align-items: end;
`;

const TituloSensores = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
`;

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    max-width: 100vw;
    padding: ${(props) => props.user === true ? '0rem 2.5rem 0rem 2.5rem': '0px'};

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

const Titulo = styled.h1`
    color: ${theme.danube_950};
    font-size: 28px;
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

const ContenedorUsuario = styled.div`
    width: 135px;

    @media (max-width: 481px){
        width: 30px;
    }
`;

const EncapsulaControles = styled.div`
    display: grid;
    width: calc(100%-15px);
    max-height: 180px;
    border-radius: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    padding: 8px;
    overflow: auto;
    border: 2px solid ${theme.danube_600};
    background: ${theme.danube_200};

    // scroll 
    &::-webkit-scrollbar {
        background: none;
    }
`;

const ContenedorAgregar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
`;

const AlineacionSensor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
`;

const Alineacion = styled.div`
    text-align: center;
`;

const NoSensores = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100px;
`;

const Tam = styled.div`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
`;

const Aviso = styled.p`
    color: ${theme.danube_900};
    font-size: x-large;
`;

const ContenedorOpciones = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8px 0 8px 0;
    justify-content: space-evenly;
    align-items: end;
`;

const Contenedor = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 55px);
    justify-content: center;
    align-items: center;
`;

const ContenedorFormulario = styled.div`
    width: 19rem;
    border: 1px solid ${theme.danube_400};
    border-radius: 16px;
    box-shadow: 10px crimson ;
    padding: 1.5rem 1.5rem .5rem 1.5rem;
    background-color: ${theme.danube_50};
`;
 
const Centrar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ContenedorError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90%;
    min-height: 70vh;
    justify-content: space-around;
`;

export { 
    Superior, ContenedorAlarma, ContenedorControles, ContenedorSensores, TituloSensores, 
    ContenedorHeader, Relleno, Titulo, Imagen, Logo, EncapsulaControles, ContenedorAgregar, 
    AlineacionSensor, Alineacion, NoSensores, Tam, Aviso, ContenedorUsuario, ContenedorOpciones, 
    Contenedor, ContenedorFormulario, Centrar, ContenedorError
};