import React from 'react';
import { IndexLink } from 'react-router';

const NotFound = () => {
  return (
    <div className='container'>
      <h2>Page not found</h2>

      <IndexLink to='/'>Go home</IndexLink>
    </div>
  );
};

export default NotFound;
