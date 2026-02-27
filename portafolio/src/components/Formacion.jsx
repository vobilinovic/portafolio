import styled from "styled-components";
import {DivTitulo, TituloPrincipal} from "../styles/Estilos";
import {Formacion} from "../data/Formacion";

function FormacionComponente(){
    return(
        <>
            <DivTitulo>
                <TituloPrincipal>Formación</TituloPrincipal>
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
                            <Fecha>{item.fecha}</Fecha>
                        </CardHeader>
                        
                       
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
    padding: 0 350px;
    align-items: stretch;
`;

const Card = styled.div`
    background: #C9C2E7;
    padding: 20px;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
`;

const Icono = styled.div`
    background-color: white;
    padding: 10px;
    width: 100%;
    max-width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Fecha = styled.p`
    font-size: 14px;
`;