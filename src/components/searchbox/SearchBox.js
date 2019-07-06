import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {

   return (
      <div class="box">
        <div class="container-1">
            <span class="icon"><i class="fa fa-search"></i></span>
            <input
               type = 'text'
               placeholder = 'Search App'
               name = 'search'
               id = 'search'
               onChange = {searchChange}
            />
        </div>
      </div>
   );
};

export default SearchBox;
