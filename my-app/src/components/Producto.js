import React from 'react';



export default function Producto(props) {
    const {producto}=props;
    return (
        <div key={producto._id} className="card">
        <a href={`/producto/${producto._id}?`}>
            <img className="medium" src={producto.image1} alt={producto.nombre} />
        </a>
    <div className="card-body">
    <a href={`/producto/${producto._id}`}>
        {producto.nombre}</a>

        <div className="precio">{producto.precio}€</div>
    </div>
    </div>
    );
}
