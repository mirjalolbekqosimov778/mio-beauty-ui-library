import React from 'react';
import { Button } from './stories/Components/NegativeButton/Button.jsx';

import "./styles/global.scss";


function App() {
  return (
    <>
      <Button
        primary
        label="Button text"
        tone='negative'
        disabled
      // onClick={() => alert('Primary clicked!')}
      />
    </>
  );
}

export default App;
