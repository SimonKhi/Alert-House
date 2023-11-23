import React, { useState } from 'react';
import { Tooltip, Popconfirm } from 'antd';
import { CloseCircleOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import eliminarSensor from '../firebase/eliminarSensor';
import ModuloSensor from './ModuloSensor';
import { ContenedorOpciones } from '../components/Dimensiones';
import { BotonOpcion } from './Botones';

const Opciones = ({sensor}) => {
    const [visibleEditar, cambiarVisibleEditar] = useState(false);

    const Mostrar = () => {
        cambiarVisibleEditar(true)
    }

    return (
        <>
            <ContenedorOpciones>
                <Popconfirm
                    title='Eliminar Sensor'
                    description='¿Está seguro de eliminarlo?'
                    okText='Confirmar'
                    cancelText='Cancelar'
                    icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                    onConfirm={() => eliminarSensor(sensor.id)}
                >
                    <Tooltip title="Eliminar Sensor" placement='bottom'>
                        <BotonOpcion><CloseCircleOutlined/></BotonOpcion>
                    </Tooltip>
                </Popconfirm>
                <Tooltip title='Editar Sensor' placement='bottom'>
                    <BotonOpcion onClick={() => Mostrar()}><EditOutlined/></BotonOpcion>
                </Tooltip>
                <ModuloSensor visible={visibleEditar} cambiarVisible={cambiarVisibleEditar} sensor={sensor}/>
            </ContenedorOpciones>
        </>
    );
}
 
export default Opciones;