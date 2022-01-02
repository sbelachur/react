import React from 'react';
import Category from '../Category';


function CategoryList ({categories}) {
    return categories.map ((category) =>
    <Category key= {category.catId} category={category}/>);
}
export default CategoryList;