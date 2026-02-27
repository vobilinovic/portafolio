import styled from "styled-components";
import {DivTitulo, TituloPrincipal, BotonBase, Span} from "../styles/Estilos"
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
            <Texto>
                <b>Importante:</b> Todos los proyectos presentados han sido modificados para proteger la confidencialidad de la información, 
                garantizando que no se revele ningún dato sensible o específico de los proyectos originales.
            </Texto>
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
    margin-bottom: 50px;
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
    height: 200px;
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

const CardBtn = styled(BotonBase)`
    width: 100%;
`;

const CardFooter = styled.div`
    padding: 20px;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    border-top: solid 1px #f5f5f5;
    gap: 15px;
`;

const DivSpan = styled.span`
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;


const Texto = styled.p`
    text-align: center;
    padding: 0px 400px;
    color: #5C5C5C;
`;