import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    const Regresar = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Error 404</h1>
            <button onClick={Regresar}>Return</button>
        </div>
    );
}
 
export default Error404;