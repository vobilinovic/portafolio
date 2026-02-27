import styled from "styled-components";
import { BriefcaseBusiness } from "lucide-react";

function Navbar(){
    return(
        <Nav>
            <Logo>
                <BriefcaseBusiness strokeWidth={2} />
                <LogoTitulo>MI PORTAFOLIO</LogoTitulo>
            </Logo>
            <Menu>
                <Item>Presentación</Item>
                <Item>Formación</Item>
                <Item>Experiencia</Item>
                <Item>Proyectos</Item>
                <Item>Contacto</Item>
            </Menu>
        </Nav>
    );
}

export default Navbar;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 80px;
    height: 60px;
    background-color: transparent;
    color: #8370D0;
`;

const Logo = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LogoTitulo = styled.h1`
    font-size: 24px;
    font-weight: 700;

`;

const Menu = styled.nav`
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    display: flex;
`;

const Item = styled.a`
    font-size: 18px;
    font-weight: 00;
    color: #5C5C5C;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        color: #e0d4ff;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
    }
`;
