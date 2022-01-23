import React, {useEffect, useState} from 'react';

import Category from '../../components/Category';

import Categories from '../../mocks/Categories';
import {Row} from 'react-bootstrap';


function CategoriesContainer () {
    const [categories, setCategories] = useState ([]);

    useEffect(() => {
        const catPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (Categories);
        }, 2000)
    })

    catPromise.then ((resolve) => {
        setCategories(resolve);
    });

}, [categories])

return (
    <>
    <Row>
        <h2>Categorias</h2>
        <Category categories={categories}/>
    </Row>
    </>
)
}


export default CategoriesContainer;