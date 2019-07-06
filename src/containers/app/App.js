import React, {Component} from 'react';
import './App.css';

import AppList from '../../components/applist/AppList';
import {applications} from '../../db/appsDB';

import SearchBox from '../../components/searchbox/SearchBox';


class App extends Component {

   constructor() {
      super();
      this.state = {
         apps: [],
         searchfield: ''
      }
   }

   render() {
      return (
         <div className='tc pa5'>
            <div className='pageTitle'> Account Manager </div>
            <SearchBox />
            <AppList apps = {applications} />
         </div>
      )
   };
};

export default App;
