import React, { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';

const ModuloAgregar = ({ visible, cambiarVisible}) => {
    const [sensores, cambiarSensore] = useState([
        { id:1, nombre:"Puerta Principal", tipo:"Puerta"}, 
        {id:2, nombre:"Ventana Sala", tipo:"Ventana"},
    ]);
    const [formulario] = Form.useForm();
    const { Option } = Select;

    const NuevoSensor = (values) => {
        console.log('Mostrar valores', values);
        cambiarSensore([...sensores, {id: 3, nombre:values.nombre, tipo:values.acceso}])
        cambiarVisible(false);
        console.log(sensores);
    }

    const CerrarModal = () => {
        formulario.resetFields();
        cambiarVisible(false);
    }

    return (
        <Modal 
            open={visible} 
            title="Agregar sensor"
            okText="Agregar"
            cancelText="Cancel"
            onCancel={CerrarModal}
            onOk={() => {
                formulario.validateFields().then((values) => {
                    formulario.resetFields();
                    NuevoSensor(values);
                }).catch((error) => {
                    console.log('Error:', error);
                })
            }}
        >
            <Form form={formulario} name='agregar_sensor'>
                <Form.Item name="acceso" label="Acceso" rules={[{required: true, message: "Seleccione un acceso"},]}>
                    <Select placeholder="Seleccione el acceso" allowClear>
                        <Option value="puerta">puerta</Option>
                        <Option value="ventana">ventana</Option>
                    </Select>
                </Form.Item> 
                <Form.Item name="nombre" label="Nombre" rules={[{required: true, message: 'Introduzca un nombre',},]} >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
 
export default ModuloAgregar;