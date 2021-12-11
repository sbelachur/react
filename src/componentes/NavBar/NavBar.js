import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget';
import React from 'react';

export const NavBar = () => {
    return (
        <>
        <h1>Título e-commerce</h1>
        <h3>Categorías</h3>
        <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
        </ul>
        <CartWidget />
        </>
    )
}