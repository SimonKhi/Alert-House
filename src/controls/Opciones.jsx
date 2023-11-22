import React, { useState } from 'react';
import { Button, Space, Popconfirm } from 'antd';
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons'
import eliminarSensor from '../firebase/eliminarSensor';
import ModuloSensor from './ModuloSensor';

const Opciones = ({sensor, id}) => {
    const [visibleEditar, cambiarVisibleEditar] = useState(false);

    const Mostrar = () => {
        cambiarVisibleEditar(true)
    }

    return (
        <>
            <Space>
                <Popconfirm
                    title='Eliminar Sensor'
                    description='¿Está seguro de eliminarlo?'
                    okText='Sí'
                    cancelText='No'
                    onConfirm={() => eliminarSensor(id)}
                >
                    <Button type='text' shape='circle' icon={<CloseCircleOutlined style={{fontSize:"27px"}}/>}/>
                </Popconfirm>
                <Button type='text' shape='circle' icon={<EditOutlined style={{fontSize:"25px"}}/>} onClick={() => Mostrar()}/>
                <ModuloSensor visible={visibleEditar} cambiarVisible={cambiarVisibleEditar} sensor={sensor}/>
            </Space>
        </>
    );
}
 
export default Opciones;