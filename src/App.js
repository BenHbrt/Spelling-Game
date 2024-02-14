import './App.scss';
import './Global.scss';

import { useState } from 'react';

import Game from './Components/Game/Game';

function App() {

  const [display, setDisplay] = useState('game');

  return (
    <div className="app">
      <h1 className="app_title">Spelling Game</h1>
      {display === 'game' ? <Game /> : null}
    </div>
  );
}

export default App;
