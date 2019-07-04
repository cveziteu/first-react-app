import React from 'react';
import './App.css';

import CardList from '../../components/cardlist/CardList';
import {cards} from '../../db/cardsDB';

import SearchBox from '../../components/searchbox/SearchBox';


const App = () => {
   return (
      <div className='tc pa5'>
         <div className='pageTitle'> Account Manager </div>
         <SearchBox />
         <CardList cards = {cards} />
      </div>
   );
};

export default App;
