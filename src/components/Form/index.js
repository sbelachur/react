import React, {useState, useContext} from 'react';
import {cartContext} from "../../context/CartContext";
import {getFirestore} from "../../firebase"
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Formulario = () => {
    const {items, clearCart, totalCart} = cartContext();
    const [id, setId] = useState ("");
    const [datosUsuarios, setDatosUsuarios] = useState ({
        nombre: '',
        apellido: '',
        email: '',
        telefono: 0,
    });

    const handleChange = (e) => {
        setDatosUsuarios ({...datosUsuarios, [e.target.name]: e.target.value});

    };

    const pedido = {
        cliente: datosUsuarios,
        productos: items,
        total: totalCart (),
        fecha: firebase.firestore.Timestamp.fromDate (new Date ()),

    };

    const confirmarPedido = (e) => {
        if(
            datosUsuarios.nombre.length < 5 ||
            datosUsuarios.apellido.length < 5 ||
            datosUsuarios.email.length < 6 ||
            datosUsuarios.telefono.length < 10
        ){
            alert('Completa todos los campos');
            return;
        }else if (items.length === 0) {
            alert('No hay productos en el carrito');
            return;
        }
        e.preventDefault ();
        const bd = getFirestore ();
        const pedidos = bd.collection ("pedidos");
        const query = pedidos.add(pedido);
        query.then(({id})=> {
            setId(id);
        })
        clearCart();
    };

    if (id==="") {
        return (
            <form>
                <h2>Ingresa tu información</h2>
                <input onChange={handleChange} name="nombre" type="text" placeholder="Nombre" required></input>
                <input onChange={handleChange} name="apellido" type="text" placeholder="Apellido" required></input>
                <input onChange={handleChange} name="email" type="email" placeholder="Email" required></input>
                <input onChange={handleChange} name="telefono" type="tel" placeholder="Telefono" required></input>
                <Button onClick={confirmarPedido}>Confirma tu compra</Button>

            </form>
        );
    } else {
        return (
            <div>
            <p>Has gestionado tu pedido. El ID es: {id}</p>
            <Link to="/">
                <Button>Volver a la tienda</Button>
            </Link>
            </div>
        )
    }


}

export default Formulario;