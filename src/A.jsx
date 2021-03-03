import React, { useState } from 'react';

 function App({onC}) {
  const [z, setZ] = useState('BOLO');
  return (
    <>
    <h1>{z}</h1>
      <button
        type="button"
        onClick={onC}
      >click</button>
   </>
  );
}
export default App;
