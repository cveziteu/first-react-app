import React, {Component} from 'react';
import './App.css';

import AppList from '../../components/applist/AppList';
import {applications} from '../../db/appsDB';

import SearchBox from '../../components/searchbox/SearchBox';

import ErrorBoundry from '../../components/errorboundry/ErrorBoundry';

class App extends Component {

   constructor() {
      super();
      this.state = {
         apps: applications,
         searchfield: ''
      }
   }

   onSearchEvent = (event) => {
      this.setState({ searchfield: event.target.value });

   }

   render() {
      const {apps, searchfield} = this.state;
      const filteredApps = apps.filter(app => {
         return app.name.toLowerCase().includes(searchfield.toLowerCase())
      });
      return (
         <div className = 'pa5'>
            <div className = 'pageTitle tc'> Account Manager </div>
            <SearchBox searchChange = {this.onSearchEvent} />
            <ErrorBoundry>
               <AppList apps = {filteredApps} />
            </ErrorBoundry>
         </div>
      )
   };
};

export default App;
