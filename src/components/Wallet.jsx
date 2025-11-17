import "./components.css";
import Cuenta from "../layouts/Cuenta";
import Proyecto from "../layouts/Proyecto";
import Main from "../layouts/Main";

function Wallet({ invertido, setInvertido, stakeado, setStakeado }) {
  return (
    <>
      <section className="container">
        <article className="row">
          <div className="col-sm-6 col-md-3">
            <Cuenta
              invertido={invertido}
              setInvertido={setInvertido}
              stakeado={stakeado}
              setStakeado={setStakeado}
            />
          </div>
          <div className=" col-sm-6 col-md-4">
            <Main stakeado={stakeado} setStakeado={setStakeado} />
          </div>
        </article>
        <article className="row">
          <Proyecto invertido={invertido} setInvertido={setInvertido} />
        </article>
      </section>
    </>
  );
}

export default Wallet;
