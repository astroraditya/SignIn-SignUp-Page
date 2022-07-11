import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left text-light' navbar-static-bottom >
      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://github.com/astroraditya'>
          AstroRaditya
        </a>
      </div>
    </MDBFooter>
  );
}