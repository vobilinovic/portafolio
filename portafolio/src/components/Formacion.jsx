import styled from "styled-components";
import {DivTitulo, TituloPrincipal} from "../styles/Estilos";
import {Formacion} from "../data/Formacion";

function FormacionComponente(){
    return(
        <>
            <DivTitulo>
                <TituloPrincipal>Formación</TituloPrincipal>
                <hr></hr>
            </DivTitulo>
            <DivCards>
                {Formacion.map((item) => {
                    const IconoComponente = item.icono;

                    return (
                    <Card key={item.id}>
                        <CardHeader>
                            <Icono>
                                {IconoComponente && <IconoComponente/>}
                            </Icono>
                        </CardHeader>
                        <CardBody>
                            <Universidad>{item.universidad}</Universidad>
                            <Titulo>{item.titulo}</Titulo>
                            <Fecha>{item.fecha}</Fecha>
                        </CardBody>
                    </Card>
                    );
                })}
            </DivCards>
      </>
    );
}

export default FormacionComponente;

const DivCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 0 250px;
    align-items: stretch;
`;

const Card = styled.div`
    background-color: #E9E6F1;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    border: 1px solid rgba(131, 112, 208, 0.1);
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icono = styled.div`
    background-color: #8375BD;
    color: white;
    padding: 10px;
    width: 100%;
    max-width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const CardBody = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #5C5C5C;
    margin: 0;
    padding: 0;
`;

const Fecha = styled.p`
    font-size: 14px;
    color: #5C5C5C;
    margin-top: 20px;

`;

const Universidad = styled.p`
    font-size: 14px;
    margin: 0;
    padding: 0;
    color: #5C5C5C;
`;