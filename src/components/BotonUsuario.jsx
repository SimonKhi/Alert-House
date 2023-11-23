import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signOut, deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { BotonLink, BotonTexto, BotonLink1 } from '../controls/Botones';
import { ContenedorUsuario } from './Dimensiones';

const BotonUsuario = ({nombre}) => {
    const navigate = useNavigate();
    const [modal, contextHolder] = Modal.useModal()

    const items = [
        {
            label: <BotonLink1 seleccion='true' onClick={() => CerrarSesion()}>Cerrar Sesión</BotonLink1>,
            key: '0',
        },
        {
            label: <BotonLink1 seleccion='true' onClick={() => confirmar()}>Eliminar Cuenta</BotonLink1>,
            key: '1',
        },
    ];
    
    const confirmar = () => {
        modal.confirm({
            title: 'Eliminar Cuenta',
            content: '¿Está seguro que desea eliminar su cuenta?',
            okText: "Confirmar",
            cancelText: "Cancelar",
            onOk(){ console.log('eliminar')}
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
            <Dropdown menu={{items}} /*trigger={['click']}*/ placement="bottomRight" >
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