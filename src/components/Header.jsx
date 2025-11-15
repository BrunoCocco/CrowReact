
function Header({setVista}) {
  return (
    <>
      <button onClick={()=>{setVista("Wallet")}}>wallet</button>
      <button onClick={()=>{setVista("VistaProy")}}>vista proyectos</button>
    </>
  );
}

export default Header;
