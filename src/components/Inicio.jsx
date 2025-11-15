
import Wallet from "./Wallet";
import VistasProy from "./VistasProy";
import "./components.css";

function Inicio({  vista, invertido, setInvertido, stakeado, setStakeado }) {
  return (
    <section className="container">
      {vista === "Wallet" && (
        <Wallet
          invertido={invertido}
          setInvertido={setInvertido}
          stakeado={stakeado}
          setStakeado={setStakeado}
        />
      )}
      {vista === "VistaProy" && (<VistasProy
          invertido={invertido}
          setInvertido={setInvertido} />)}
    </section>
  );
}


export default Inicio;
