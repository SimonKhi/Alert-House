import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { deleteUser, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Modal, message } from 'antd';
import { UserOutlined, UserDeleteOutlined,LogoutOutlined } from '@ant-design/icons';
import { BotonLink, BotonTexto, BotonLink1 } from '../controls/Botones';
import { ContenedorUsuario } from './Dimensiones';
import useObtenerSensores from '../hooks/useObtenerSensores';
import eliminarSensor from '../firebase/eliminarSensor';
import eliminarAlarma from '../firebase/eliminarAlarma';

const BotonUsuario = ({nombre}) => {
    const [modal, contextHolder] = Modal.useModal()
    const [sensores] = useObtenerSensores();
    const navigate = useNavigate();
    const user = auth.currentUser;

    const items = [
        {
            label: <BotonLink1 seleccion='true' onClick={() => CerrarSesion()} ><LogoutOutlined />Cerrar Sesión</BotonLink1>,
            key: '0',
        },
        {
            label: <BotonLink1 seleccion='true' onClick={() => confirmar()}><UserDeleteOutlined /> Eliminar Cuenta</BotonLink1>,
            key: '1',
        },
    ];
    
    const confirmar = () => {
        modal.confirm({
            title: 'Eliminar Cuenta',
            content: '¿Está seguro que desea eliminar su cuenta?',
            okText: "Confirmar",
            cancelText: "Cancelar",
            onOk(){BorrarUsuario()},
        })
    }

    const CerrarSesion = async () => {
        try{
            await signOut(auth);
            navigate('/iniciar-sesion');
        }catch(error) {
            console.log('Error: ',error);
        }
    }

    const BorrarUsuario = async () => {
        const id = 'alarma-'.concat(user.uid.substring(0,15));
        
        try{
            sensores.forEach((sensor) => {
                eliminarSensor(sensor.id);
            })
            eliminarAlarma(id);
            navigate('/iniciar-sesion');
            await deleteUser(user)
        }catch(error){
            console.log('Error', error);
            message.open({type: 'info', content: 'Vuela a Iniciar Sesión'})
        }
    }
    
    return (
        <ContenedorUsuario>
            <Dropdown menu={{items}} placement="bottomRight" >
                <BotonLink onClick={(e) => e.preventDefault()}>
                    <span>
                        <UserOutlined style={{fontSize: '22px'}}/>
                    </span>
                    <BotonTexto>{nombre}</BotonTexto>
                </BotonLink>
            </Dropdown>
            {contextHolder}
        </ContenedorUsuario>
    );
}
 
export default BotonUsuario;