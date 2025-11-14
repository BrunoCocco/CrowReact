import "./inicio.css"
import Cuenta from "../layouts/Cuenta";
import Proyectos from "../layouts/Proyecto";
import Main from "../layouts/Main";

function Inicio() {
  return (
    <>
    <section className="container">
      <Cuenta />
      <Proyectos />
      <Main />
    </section>
    </>
  );
}

export default Inicio;
