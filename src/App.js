import './App.css';
import Entrance from './components/Entrance';
import Header from './components/Header';
import Features from './components/Features';
import News from './components/News';
import Players from './components/Players';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Link from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="ftn">
        <Header />

        <Routes>
          <Route path='/' element={<Entrance />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/News' element={<News />} />
          <Route path='/Players' element={<Players />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
