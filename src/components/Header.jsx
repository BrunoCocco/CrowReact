import "./components.css"

function Header({setVista}) {
  return (
    <>
    <section className="container">
        <article className="header">

      <button onClick={()=>{setVista("Wallet")}}>wallet</button>
      <button onClick={()=>{setVista("VistaProy")}}>vista proyectos</button>
        </article>
    </section>
    </>
  );
}

export default Header;
