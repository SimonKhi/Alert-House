import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import PanelControl from './components/PanelControl';
import InicioSesion from './components/InicioSesion';
import CrearCuenta from './components/CrearCuenta';
import Error404 from './components/Error404';
import { AuthProvider } from './context/AuthContext';
import RutaPrivada from './components/RutaPrivada';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ContenedorPrincipal>
          <Header />
          <Routes>
            <Route path='*' element={<Error404 />}/>
            <Route path='/iniciar-sesion' element={<InicioSesion />}/>
            <Route path='/crear-cuenta' element={<CrearCuenta />}/>
            <Route path='/' element={
              <RutaPrivada>
                <PanelControl/>
              </RutaPrivada>
            }/>
          </Routes>
        </ContenedorPrincipal>
      </BrowserRouter>
    </AuthProvider>
  )
}

const ContenedorPrincipal = styled.div`
    padding: 0px;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export default App
