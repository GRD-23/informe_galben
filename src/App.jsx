import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resumen from "./components/Resumen";
import MarcoLegal from "./components/MarcoLegal";
import Delitos from "./components/Delitos";
import Comparacion from "./components/Comparacion";
import Responsabilidades from "./components/Responsabilidades";
import DatosPersonales from "./components/DatosPersonales";
import Conclusiones from "./components/Conclusiones";
import PromptIA from "./components/PromptIA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Resumen />
      <MarcoLegal />
      <Delitos />
      <Comparacion />
      <Responsabilidades />
      <DatosPersonales />
      <Conclusiones />
      <PromptIA />
      <Footer />
    </div>
  );
}

export default App;