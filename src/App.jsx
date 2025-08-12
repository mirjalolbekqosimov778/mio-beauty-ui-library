import React from 'react';
import { Button } from './stories/Button';

function App() {
  return (
    <>
      <Button
        primary
        label="+ Button text +"
        type={'Negative'}

      // onClick={() => alert('Primary clicked!')}
      />
    </>
  );
}

export default App;


// @use "../../styles/variables" as *;
// @use "../../styles/mixins-font" as *;
