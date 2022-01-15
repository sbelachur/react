//la card

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import ItemDetail from '../ItemDetail';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
            <Typography
            variant= 'h5'
            color='textSecondary'
            >
                {50}
            </Typography>
        }
        title="Correa"
        subheader="en stock"
      />
      <CardMedia
        component="img"
        height="194"
        image= "https://static3.lucasylola.es/1182-large_default/correa-para-perro-tipo-cuerda-gruesa.jpg"
        alt="Correa Perro"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Correa para perros, color roja, gruesa, fácil agarre, resistente. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCart fontsize="large"/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Correa para perros medianos</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


// import React from 'react'
// import {Card, Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

// const Item = ({item}) => {
//     return (
//         <div>
//             <Card style={{ width: '18rem'}}>
//                 <Card.Img variant="top" src={item.pictureURL} />
//                 <Card.Body>
//                     <Card.Title>{item.title}</Card.Title>
//                     <span>{item.category}</span>
//                     <Card.Text>{item.description} {item.price}
//                     </Card.Text>
//                     <Button variant="primary">Comprar</Button>
//                 </Card.Body>
//                 <Link to= {`/product/${item.id}`}>Más Info</Link>
//             </Card>
//         </div>
        
//     );
// }


// export default Item
