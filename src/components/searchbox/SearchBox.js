import React from 'react';
import './SearchBox.css';

const SearchBox = () => {

   return (
      <div className='pa2 cf'>
         <input
            className="f2 fs14px input-reset bn black-80 bg-white pa3 lh-solid w5 w4-m br2-ns br--left-ns"
            type='text'
            placeholder='Search App'
            name='searchbar'
            id='searchbar'
         />
         <input
            className='f2 fs14px button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w4 br2-ns br--right-ns'
            type='submit'
            value='Search'
         />
         <br />
         <br />
      </div>
   );
};

export default SearchBox;
