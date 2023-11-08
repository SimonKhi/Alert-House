import React, { useState } from 'react';
import { Modal, Typography, Form, Input, Select } from 'antd';

const { opcion } = Select;
const layout = {
    WrapperCol: {
        span: 16,
    },
    labelCol: {
        span: 8,
    }
}

const ModuloAgregar = ({ visible, cambiarVisible }) => {
    const [sensores, cambiarSensore] = useState([
        { id:1, nombre:"Puerta Principal", tipo:"Puerta"}, 
        {id:2, nombre:"Ventana Sala", tipo:"Ventana"},
    ]);

    const [form] = Form.useForm();

    const AccionModal = () => {
        cambiarVisible(false);
    };
    
    const OculparModal = () => {
        cambiarVisible(false);
    };

    return (
        <>
            <Modal title="Agregar Sensor" open={visible} onOk={AccionModal} onCancel={OculparModal}>
                <Form {...layout} form={form} name='agregar-sensor'  >
                    <Form.Item name="gender" label="Gender" rules={[{required: true,},]}>
                        <Select placeholder="Seleccione el acceso" allowClear>
                            <Option value="puerta">puerta</Option>
                            <Option value="ventana">ventana</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="note" label="Note" rules={[{required: true,},]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
 
export default ModuloAgregar;