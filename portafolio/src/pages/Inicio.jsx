import { useState } from 'react'
import Navbar from "../components/Navbar";
import Presentacion from '../components/Presentacion';
import FormacionComponente from '../components/Formacion';
import Experiencia from '../components/Experiencia';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import {Gradiente} from "../styles/Estilos"

function App() {
  return (
    <>

        <Gradiente>
          <Navbar />
          <Presentacion/>
        </Gradiente>
        <FormacionComponente/>
        <Experiencia/>
        <Proyectos/>
        <Contacto/>

    </>
  )
}

export default App;

