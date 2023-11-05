import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';
import Camara from '../controles/Camara';
import Alarma from '../controles/Alarma';
import Ventana from '../controles/Ventana';
import Puerta from '../controles/Puerta';
import 'inicio.css';

const Inicio = () => {

    const Title = Typography;

    return (
            <Contenedor>
                <Controles>
                    <h2>Controles</h2>
                </Controles>
                <ContenedorAlarma>
                    <Alarma />
                </ContenedorAlarma>
                <ContenedorSensores>
                    <h2>Zona de sensores</h2>
                    <div>
                        <Title level={10} align="center">Puerta Principal</Title>
                        <Puerta component="Magnetic_1" name="Puerta Principal"/>
                    </div>
                    <div>
                        <Title level={5} align="center">Ventana Sala</Title>
                        <Ventana component="PIR_3" name="Ventana de la Sala"/>
                    </div>
                    <div>
                        <Title level={5} align="center">Ventana Cuarto</Title>
                        <Ventana component="Magnetic_2" name="Ventana del Cuarto"/>	
                    </div>
                </ContenedorSensores>
            </Contenedor>
    );
}

// const Contenedor = styled.div`
//     width: 100%;
//     background-color: yellow;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     gap: 10px;
// `;

// const Controles = styled.div`
//     background-color: red;
//     width: 100%;
// `;

// const ContenedorAlarma = styled.div`
//     background-color: aqua;
// `;

// const ContenedorSensores = styled.div`
//     width: 100%;
//     background-color: lime;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
// `;
 
export default Inicio;