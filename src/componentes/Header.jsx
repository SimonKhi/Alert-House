import styled from "styled-components";
import './titulo.css'

const Header = () => {
    return (
        <ContenedorHeader>
            <h2 className="titulo">SecurIoT</h2>
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background-color: #dbe2ef;
`;

export default Header;