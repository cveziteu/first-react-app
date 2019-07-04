import React from 'react';
import Card from '../card/Card';

const CardList = ({ cards }) => {
   return (
      <div>
         {
           cards.map((card, i) => {
             return (
               <Card
                 key    =  {i}
                 id     =  {cards[i].id}
                 name   =  {cards[i].name}
                 image  =  {cards[i].image}
                 />
             );
           })
         }
      </div>
   );
};

export default CardList;
