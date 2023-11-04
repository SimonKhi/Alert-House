import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';

const App = () => {
    return (
        <BrowserRouter>
          <ContenedorPrincipal>
              <Header />
              <Inicio />
          </ContenedorPrincipal>
        </BrowserRouter>
    )
}

const ContenedorPrincipal = styled.div`
    padding: 0px;
    width: 100%;
    height: calc(100vh - 55px);
`;

// const Main = styled.main`
//   background: #f9f7f7;
//   padding: 30px;
//   box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
// `;

export default App
