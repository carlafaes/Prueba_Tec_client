import './App.css';
import { Route,Routes } from 'react-router-dom';
//components
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
