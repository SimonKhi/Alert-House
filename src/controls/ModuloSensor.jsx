import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Select, message } from 'antd';
import { useAuth } from '../context/AuthContext';
import agregarSensor from '../firebase/agregarSensor';
import editarSensor from '../firebase/editarSensor';

const ModuloSensor = ({ visible, cambiarVisible, sensor}) => {
    const [formulario] = Form.useForm();
    const { Option } = Select;
    const { usuario } = useAuth();

    const [selectAcceso, cambiarSelectAcceso] = useState()
    const [inputNombre, cambiarInputNombre] = useState('')
    
    useEffect(() => {
        if(sensor){
            if(sensor.uidUsuario === usuario.uid ){
                cambiarSelectAcceso(sensor.acceso);
                cambiarInputNombre(sensor.nombre);
            }
        }
    }, [sensor, usuario, visible])

    const NuevoSensor = (values) => {
        if(sensor){
            editarSensor({
                id: sensor.id,
                acceso: values.acceso,
                nombre: values.nombre,
            }).then(() => {
                message.open({type: 'success', content: 'Sensor editado con éxito'})
            }).catch((error) => {
                console.log(error);
                message.open({type: 'error', content: 'Hubo un error al editar el sensor'})
            })
        }else {
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
        }
        cambiarVisible(false);
    }

    const CerrarModal = () => {
        formulario.resetFields();
        cambiarVisible(false);
    }

    return (
        <Modal 
            open={visible} 
            title={sensor ? "Editar Sensor" : "Agregar sensor"}
            okText={sensor ? "Editar" :"Agregar"}
            cancelText="Cancelar"
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
            <Form form={formulario} name={sensor ? 'editar_sensor'+sensor.nombre :'agregar_sensor'}>
                <Form.Item name="acceso" label="Acceso" rules={[{required: true, message: "Seleccione un acceso"},]} initialValue={selectAcceso}>
                    <Select placeholder="Seleccione el acceso" allowClear >
                        <Option value="Puerta">Puerta</Option>
                        <Option value="Ventana">Ventana</Option>
                    </Select>
                </Form.Item> 
                <Form.Item name="nombre" label="Habitación" rules={[{required: true, message: 'Introduzca un nombre',},]} initialValue={inputNombre}>
                    <Input placeholder='Habitacion en donde esta el acceso'/>
                </Form.Item>
            </Form>
        </Modal>
    );
}
 
export default ModuloSensor;