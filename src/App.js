import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Maincontent';

function App() {
  const[darkbg,setbg] = useState({backgroundColor:"white",color:"black"});
  return (
    <div className="App" style={darkbg}>
     <Header darkTheme={darkbg} setDarkTheme={setbg}  />
    </div>
  );
}

export default App;
