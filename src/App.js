import './App.css'
import Home from './components/Home/Home'
import Introduction from './components/Introduction/Introduction'
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
