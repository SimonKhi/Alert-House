import styled from "styled-components";

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
    background-color: aqua;
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

export { Superior, ContenedorAlarma, ContenedorControles, ContenedorSensores, TituloSensores };