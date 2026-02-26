import { useState } from 'react'
import Navbar from "../components/Navbar";
import Presentacion from '../components/Presentacion';
import Formacion from '../components/Formacion';
import Experiencia from '../components/Experiencia';
import Proyectos from '../components/Proyectos';

function App() {
  return (
    <>
      <Navbar />
      <Presentacion/>
      <Formacion/>
      <Experiencia/>
      <Proyectos/>
    </>
  )
}

export default App;

