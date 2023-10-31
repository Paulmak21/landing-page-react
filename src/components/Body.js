import React from 'react';
import '../index.css';

function Body() {
  return (<>

    <div className='body__container text-white  flex justify- pt-40 '>
        <div className='header__container bg-blue-200 p-4 rounded-lg'>
            <p className=''>THE FUTURE TAKES FORM</p>
            <h1 className=''>Pure Performance Goes Electric</h1>
            <button className=''>Discover more</button>
        </div>
    </div>
    <div className='footer__container'>
        <button className='text-blue'>NEXT</button>

    </div>

    </>
  )
}

export default Body;