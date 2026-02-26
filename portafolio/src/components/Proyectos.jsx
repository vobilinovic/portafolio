import styled from "styled-components";
import {DivTitulo, TituloPrincipal} from "../styles/Estilos"
import { proyectos } from "../data/Proyectos";
import { Link } from "react-router-dom";

function Proyectos(){
    return(
        <section>
            <DivTitulo>
                <TituloPrincipal>Proyectos</TituloPrincipal>
            </DivTitulo>
            <GridCards>
                {
                    proyectos.map((p) => (
                        <Card key={p.id}>
                            <CardImg src={p.img} alt={p.titulo} />
                            <CardBody>
                                <CardTitle>{p.titulo}</CardTitle>
                                <CardParrafo>{p.descripcion}</CardParrafo>
                                <hr/>
                            </CardBody>
                            <CardFooter>
                                <DivSpan>
                                    {
                                        p.lenguajes.map((l) => (
                                            <Span>{l}</Span>
                                        ))
                                    }
                                </DivSpan>
                                <CardBtn to={`/proyecto/${p.slug}`}>Ver</CardBtn>
                            </CardFooter>
                        </Card>
                    ))
                }
            </GridCards>
        </section>
    );
}
//intranet
//antartica
//compras
//Rendiciones
//mayorista10

export default Proyectos;

const GridCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 80px;
    align-items: stretch;
`;

const Card = styled.div`
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
const CardBody = styled.div`
    padding: 10px 20px;
`;

const CardImg = styled.img`
    width: 100%;
    object-fit: fill;
    display: block;
    height: 250px;
    transition: all 0.5s ease;

    &:hover{
        opacity: 40%;
    }
`;

const CardTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #8370d0;
`;

const CardParrafo = styled.p`
    font-size: 14px;
    color: #5C5C5C;
`;

const CardBtn = styled.button`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size: 14px;
    color: white;
    background-color: #8370d0;
    padding: 5px 0;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

const CardFooter = styled.div`
    padding: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const DivSpan = styled.span`
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;

const Span = styled.span`
    border: solid 1px #8370d0;
    border-radius: 10px;
    font-size: 12px;
    padding: 5px 10px;
    background-color: #f5f5f5;
`;