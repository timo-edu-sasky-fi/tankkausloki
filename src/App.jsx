import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from './components/Input.jsx';
import Graph from './components/Graph.jsx';
import Output from './components/Output.jsx';
import NavBar from './components/NavBar.jsx';
import FrontPage from './components/FrontPage.jsx';

function App() {

  return (
      <Router> {/*reititys, laitetaan elementit perustuen osoitteeseen*/}
        <Routes>
          <Route path='/' element={<FrontPage />}/>
          <Route path='/input' element={<Input />}/>
          <Route path='/graph' element={<Graph />}/>
          <Route path='/output' element={<Output />}/>
        </Routes>
        <NavBar />
      </Router>
  );
}

export default App
