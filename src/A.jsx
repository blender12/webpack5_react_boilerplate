import React, { useState } from 'react';

function App() {
  const [z, setZ] = useState('BOLO');
  return (
    <>
      <h1>React-test{z}</h1>
      <button 
       type="button" 
       onClick={() => {
       setZ('okay');
      }}>click</button>
   </>
  );
}
export default App;
