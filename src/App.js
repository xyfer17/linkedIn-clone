import  {Login}  from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
            
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
