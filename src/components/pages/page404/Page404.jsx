import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 style={{ color: 'white' }}>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
        {/* <button>Nothing to see here!</button> */}
      </p>
    </div>
  );
};

export default Page404;

/*
resource: https://www.youtube.com/watch?v=UjHT_NKR_gU ; time 20:40
author seems to suggest that <Link> === button + useNavigate hook 
yet
in my case I've noticed:
using <Link> when return to <MainPage> <InitialOverlay> is triggered 
using <button> when return to <MainPage> <InitialOverlay> is not triggered 
*/
