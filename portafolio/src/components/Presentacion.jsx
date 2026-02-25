import styled from "styled-components";


function Presentacion(){
    return(
        <Card>
            <Imagen/>
            <Texto>
                <Titulo>Verónica Obilinovic Mercado</Titulo>
                <Subtitulo>Desarrollo Web | Diseño UX</Subtitulo>
                <p>Analista Computacional de formación. A lo largo de mi aprendizaje me he 
                    perfeccionado en el desarrollo web, combinando la construcción de sistemas con el diseño 
                    de interfaces centradas en el usuario.</p>
            </Texto>
        </Card>
    );
}

export default Presentacion;

const Card = styled.div`
    background: linear-gradient(180deg,rgba(131, 112, 208, 1) 0%, rgba(245, 245, 245, 1) 100%); 
    padding: 80px 120px;
    display: flex;
    align-items: center;
    color: 
`;

const Imagen = styled.div`
    border-radius: 50%;
    background-color: grey;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1/1;
`;

const Texto = styled.div`
    padding: 0px 80px;
    color: #5C5C5C;
`;

const Titulo = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    padding: 0;
`;

const Subtitulo = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    padding: 0;
`;

