import React, {useEffect, useState} from 'react';
import {NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Categories from '../../mocks/Categories'



function Category () {
    const [categories,setCategories] = useState([]);

    useEffect (() => {
        const catPromise = new Promise ((resolve,reject) => {
            resolve (Categories);

        });
        catPromise.then ((result) => setCategories (result));
    }, []);

    return (
        <>
        {categories.map ((categories) => {
            return (
                <NavDropdown.Item as={NavLink}
                to={`/categoria/${categories.title}`}
                key={categories.catId}>
                    {categories.title}
                </NavDropdown.Item>
            )
        })}
        </>
    )
}


export default Category;