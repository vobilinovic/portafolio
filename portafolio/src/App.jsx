import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function App() {
  return (
    <BrowserRouter basename="/portafolio">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyecto/:id" element={<ProyectoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;