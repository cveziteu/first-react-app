import React from 'react';
import Card from '../card/Card';

const AppList = ({ apps }) => {
   return (
      <div>
         {
           apps.map((app, i) => {
             return (
               <Card
                 key    =  {i}
                 id     =  {apps[i].id}
                 name   =  {apps[i].name}
                 image  =  {apps[i].image}
                 />
             );
           })
         }
      </div>
   );
};

export default AppList;
