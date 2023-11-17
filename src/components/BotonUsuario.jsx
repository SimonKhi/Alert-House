import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signOut, deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { BotonLink, BotonTexto } from '../controls/Botones';
import styled from 'styled-components';

const BotonUsuario = ({nombre}) => {
    const navigate = useNavigate();
    const [mostrar, cambiarMostrar] = useState(false);
    const items = [
        {
            label: <BotonLink seleccion='true' onClick={() => CerrarSesion()}>Cerrar Sesión</BotonLink>,
            key: '0',
        },
        {
            label: <BotonLink seleccion='true' onClick={() => cambiarMostrar(true)}>Eliminar Cuenta</BotonLink>,
            key: '1',
        },
    ];
    
    const CerrarSesion = async () => {
        try{
            await signOut(auth);
            navigate('/iniciar-sesion');
        }catch(error) {
            console.log('Error: ',error);
        }
    }

    const BorrarUsuario = async () => {
        const user = auth.currentUser;
        try{
            cambiarMostrar(false);
            await deleteUser(user);
            navigate('/iniciar-sesion');
        }catch(error){
            console.log(error);
        }
    }
    
    return (
        <ContenedorUsuario>
            <Dropdown menu={{items}} trigger={['click']} placement="bottomRight">
                <BotonLink onClick={(e) => e.preventDefault()}>
                    <span>
                        <UserOutlined />
                    </span>
                    <BotonTexto>{nombre}</BotonTexto>
                    {/* <Space>
                        <UserOutlined />{nombre}
                    </Space> */}
                </BotonLink>
            </Dropdown>
            <Modal 
                open={mostrar}
                title='¿Está seguro que desea eliminar su cuenta?'
                okText="Por supuesto que Sí"
                cancelText="No, ya me arrepentí"
                onCancel={() => cambiarMostrar(false)}
                onOk={BorrarUsuario}
            />
        </ContenedorUsuario>
    );
}

const ContenedorUsuario = styled.div`
    width: 135px;

    @media (max-width: 481px){
        width: 30px;
    }
`;
 
export default BotonUsuario;