import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './componentes/Header';
import PanelControl from './componentes/PanelControl';

const App = () => {
    return (
        <BrowserRouter>
          <ContenedorPrincipal>
              <Header />
              <PanelControl />
          </ContenedorPrincipal>
        </BrowserRouter>
    )
}

const ContenedorPrincipal = styled.div`
    padding: 0px;
    width: 100%;
`;

export default App
