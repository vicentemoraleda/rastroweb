
import React from `react`;
import Producto from `./components/Producto`;
import data from `./data`;

function App() {
  return (
<div className="grid-container">
     <header className="cabecera">
              <div className="row cabecera">
                    <a  href="/"><img src="img/logo.png"  alt="logo"/></a>
                    <a   href="/">El rastro de Pepa </a>
              </div>

              <div className="row botonera">
                <div></div>
                <div>
                <a href="/cart" >Carrito</a>
                <a href="/signin">Alta Comprador</a>
                </div>
              </div>   
     </header>

<main>
  <div>
        <div className="row center"> 
        {data.productos.map((producto)=>(
        <Producto key={producto._id} producto={producto}></Producto>
          ))}
        </div>

          <div className="row center">
                      {data.products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                      ))}
          </div>


<div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
</div>
</div>
</main>


<footer className="row botonera">
Todos los derechos reservados
</footer>



</div> 

  )}

export default App;
