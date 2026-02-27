import { Container } from "lucide-react";
import styled from "styled-components";

export const Theme = {
  colors: {
    primary: "#8370d0",
    secondary: "#f5f5f5",
    text: "#5C5C5C",
  }
};

export const Device = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

export const 

export const DivTitulo = styled.div`
    align-items: center;
    text-align: center;
    
`;

export const TituloPrincipal = styled.p`
    font-size: 32px;
    color: #8370d0;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
`;

export const Parrafo = styled.div`
    align-items: center;
    display: flex;   
`;

export const Gradiente = styled.div`
  background: #8370D0;
  background: linear-gradient(172deg,rgba(131, 112, 208, 0.39) 24%, rgba(245, 245, 245, 1) 75%);
  width: 100%;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
`;

export const BotonBase = styled.button`
  font-family: 'Poppins', sans-serif;
  width: 200px;
  font-size: 16px;
  color: white;
  background-color: #8370d0;
  padding: 8px 0;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

export const BotonSecuntario = styled(BotonBase)`
  background-color: transparent;
  color: #8370d0;
  border: solid 2px #8370d0;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.3s ease;
  &:hover{
    background-color: #8370d0;  
    color: white;
  }
`; 

export const Span = styled.span`
    border: solid 1px #8370d0;
    border-radius: 10px;
    font-size: 12px;
    padding: 5px 10px;
    background-color: #F5F5F5;
`;
