import rendiciones from "../assets/Rendiciones/rendicionesCard.jpg";
import operaciones from "../assets/Vuelos/vuelos_generico.jpg";
import intranet from "../assets/Intranet/intranet.png";

export const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Gestión de Operaciones Aéreas",
    slug: "operaciones",
    descripcion: "Proyecto desarrollado para optimizar y centralizar los procesos operativos asociados a vuelos, utilizado por equipos internos en un entorno productivo.",
    img: operaciones,
    lenguajes: ["Html5", "CSS", "Javascript", "jQuery"],
  },
  {
    id: 2,
    titulo: "Rendiciones",
    slug: "rendiciones",
    descripcion: "Desarrollo de un sistema web para la gestión y control de rendiciones de gastos corporativos, diseñado para optimizar el flujo de aprobación y garantizar trazabilidad en los procesos financieros.",
    img: rendiciones,
    lenguajes: ["Html5", "CSS", "Javascript", "jQuery", "SAP"],
  },
  {
    id: 3,
    titulo: "Intranet Corporativa",
    slug: "intranet",
    descripcion: "Desarrollo de una Intranet corporativa orientada a centralizar la comunicación interna de la organización, asegurando orden, trazabilidad y fácil acceso a procedimientos y comunicados internos.",
    img: intranet,
    lenguajes: ["Html5", "CSS", "Javascript", "jQuery", "API REST"],
  },
  {
    id: 4,
    titulo: "Sistema de Compras",
    slug: "compras",
    descripcion: "Desarrollo de un sistema web para abastecimiento orientado a controlar las solicitudes de compra de insumos y servicios, incorporando flujos de aprobación escalonados según montos y estructura organizacional, e integración con SAP para la emisión automática de órdenes de compra.",
    img: rendiciones,
    lenguajes: ["Html5", "CSS", "Javascript", "jQuery", "API REST"],
  },
  {
    id: 5,
    titulo: "Rediseño UX Mayorista 10",
    slug: "mayorista10",
    descripcion: "Proyecto de rediseño UX del sitio web de Mayorista10, desarrollado durante un Diplomado en Diseño UX, aplicando investigación de usuarios, análisis de usabilidad y diseño centrado en el usuario. Se elaboraron wireframes y prototipos interactivos en Figma con el objetivo de mejorar la experiencia.",
    img: rendiciones,
    lenguajes: ["Figma", "Metodologías Ágiles", "Investigación UX"],
  }
];