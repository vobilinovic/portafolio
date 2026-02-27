import styled from "styled-components";
import { ArrowDownToLine, Linkedin } from 'lucide-react';
import {BotonBase, BotonSecuntario, Device} from "../styles/Estilos"

function Presentacion(){
    return(
        <Card>
            <Imagen/>
            <Texto>
                <PreTitulo>Presentación</PreTitulo>
                <Titulo>Verónica Obilinovic Mercado</Titulo>
                <Subtitulo>Desarrollo Web | Diseño UX</Subtitulo>
                <p>Analista Computacional de formación. A lo largo de mi aprendizaje me he 
                    perfeccionado en el <b>desarrollo web</b>, combinando la construcción de sistemas con el diseño 
                    de interfaces centradas en el usuario.</p>
                <DivBotones>
                    <BotonCV><ArrowDownToLine/> Descargar CV</BotonCV>
                    <BotonLinkedin><Linkedin/> </BotonLinkedin>
                </DivBotones>
            </Texto>
        </Card>
    );
}

export default Presentacion;

const Card = styled.div`
    padding: 0px 200px;
    background: transparent; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    @media (max-width: ${Device.laptop}) {
        padding: 0px 200px;
    }

    @media (max-width: ${Device.tablet}) {
       padding: 0px 10px;
    }

    @media (max-width: ${Device.mobile}) {
        padding: 0px 20px;
    }
`;

const Imagen = styled.div`
    border-radius: 50%;
    background-color: grey;
    width: 100%;
    max-width: 500px;
    min-width: 280px;
    aspect-ratio: 1/1;

    @media (max-width: ${Device.mobile}) {
        max-width: 300px;
        min-width: auto;
    }

    @media (max-width: ${Device.tablet}) {
        max-width: 300px;
        min-width: auto;
    }

    
`;

const PreTitulo = styled.p`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;  
    margin: 0;
    padding: 0;
`;

const Texto = styled.div`
    padding: 0px 80px;
    color: #5C5C5C;
`;

const Titulo = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    padding: 0;

    @media (max-width: ${Device.laptop}) {
        font-size: 20px;
    }

    @media (max-width: ${Device.tablet}) {
        font-size: 15px;
    }

     @media (max-width: ${Device.mobile}) {
        font-size: 18px;
    }
`;

const Subtitulo = styled.p`
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    color: #8370D0;
    margin: 0;
    padding: 0;
`;

const DivBotones = styled.div`
    display: flex;
    gap: 20px;
`;

const BotonCV = styled(BotonBase)`
    width: 200px; 
`;

const BotonLinkedin = styled(BotonSecuntario)`
    width: 50px; 
    display: flex;
`;