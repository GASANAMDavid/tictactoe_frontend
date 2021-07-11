import React from 'react';

function App() {
  const [header, setHeader] = React.useState('Welcome to TicTacToe Game')
  return (
    <div className='container'>
      <h3 className='header'>{header}</h3>
    </div>
  );
}

export default App;
