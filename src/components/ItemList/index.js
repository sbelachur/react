//mapear productos y devolver uno

import React, {useContext}from 'react';
import Cart from '../Cart';
// import Item from '../Item';
import CartContext from '../../context/CartContext'


const ItemList = () => {
  const {items, removeItem, addItem} = 
  useContext (CartContext);

  return (
    <>
    <h1>Productos disponibles</h1>
    <section>
      {items.map ((item, index) =>{
        return (
          <Cart
          key={index}
          item={item}
          removeItem={removeItem}
          addItem= {addItem}
          />
        );
      })}
    </section>
    </>
  )
}

{/* 


// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box'; */}
{/* // import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Product = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2, */}
{/* //   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



// const ItemList = ({items}) => {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
          
//       {items?.map((item) => (
//           <Grid item xs={6} md={8}>
//             <Product>
//             <Item {...item} key={item.id} item= {items}/>
//             </Product>
//         </Grid>
//         ))}
//       </Grid>
//     </Box>


//     );
// }; */}



export default ItemList
