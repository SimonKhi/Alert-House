import React from 'react';
import { Modal, Form, Input, Select, message } from 'antd';
import { useAuth } from '../context/AuthContext';
import agregarSensor from '../firebase/agregarSensor';

const ModuloAgregar = ({ visible, cambiarVisible}) => {
    const [formulario] = Form.useForm();
    const { Option } = Select;
    const { usuario } = useAuth();

    const NuevoSensor = (values) => {
        agregarSensor({
            acceso: values.acceso,
            nombre: values.nombre,
            uidUsuario: usuario.uid,
        }).then(() => {
            message.open({type: 'success', content: 'Sensor agregado con éxito'})
        }).catch((error) => {
            console.log(error);
            message.open({type: 'error', content: 'Hubo un error al agregar el sensor'})
        });
        cambiarVisible(false);
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
                        <Option value="Puerta">Puerta</Option>
                        <Option value="Ventana">Ventana</Option>
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