import React from 'react';
import Navigation from './Navigation';

const header =
  ({pageTitle}) => (
    <div>
      <header>
          <a className="logo" href="/index">
            Logo goes here
          </a>
          <h1>{pageTitle}</h1>
      </header>
       <Navigation /> 
    </div>
  );

export default header;
