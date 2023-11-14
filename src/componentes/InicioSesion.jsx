import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Form, Input, Button, Flex } from 'antd';
import Iniciosesion from '../imagenes/user-interface.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const InicioSesion = () => {
    const [form] = Form.useForm();

    const Mostrar = (values) =>{
        console.log(values);
        form.resetFields();
    }

    return (
        <Contenedor>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>
            <Centrar>
                <Imagen>
                    <img src={Iniciosesion} width="40%" alt="" styled="justify-content: center"/>
                </Imagen>
                <Form form={form} name='inicio-sesion' size='large' className='login-form' onFinish={Mostrar} >
                    <Form.Item name='username' rules={[{ required: true, message: 'Introduzca su nombre de usuario' },]}>
                        <Input prefix={<FontAwesomeIcon icon={faUser} />} placeholder="Correo electrónico" style={{width: "100%"}}/>
                    </Form.Item>
                    <Form.Item name='password' rules={[{ required: true, message: 'Introduzca su contraseña'}]}>
                        <Input prefix={<FontAwesomeIcon icon={faLock} />} placeholder='Contraseña' type='password' style={{width: "100%"}}/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>
                            Iniciar Sesión
                        </Button>
                        O <a href="/crear-cuenta" style={{justifyContent: "start"}}>Registrarse ahora</a>
                    </Form.Item>
                </Form>
            </Centrar>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 55px);
    justify-content: center;
    align-items: center;
`;

const Centrar = styled.div`
    width: 20rem;
    border: 1px solid;
    border-radius: 16px;
    padding: 2rem;
    background-color: #fff;
`;
 
const Imagen = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

export default InicioSesion;