
import "./components.css";
import Cuenta from "../layouts/Cuenta";
import Proyecto from "../layouts/Proyecto";
import Main from "../layouts/Main";

function Wallet({invertido, setInvertido, stakeado , setStakeado}) {
 
  return (
    <>
      <section className="container">
        <Cuenta invertido={invertido} setInvertido={setInvertido} stakeado={stakeado} setStakeado={setStakeado} />
        <Proyecto invertido={invertido} setInvertido={setInvertido} />
        <Main stakeado={stakeado} setStakeado={setStakeado}/>
      </section>
    </>
  );
}

export default Wallet;
