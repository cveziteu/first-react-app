import React from 'react';
import './Card.css';

const Card = ({id, name, image}) => {
   // console.log('id=' + id + ' | name=' + name + ' | image=' + image);
   return(
      <div className='br3 tc grow mw5 bg-white pa3 b--black-10 ba dib ma2'>
         <img alt={`${name}`} className='br-100 h3 w3 dib ba b--black-05 pa2' src={`images/app/${id}.png`} />
         <h1 className='f5 mb2'>{name}</h1>
      </div>
   );
};

export default Card;
