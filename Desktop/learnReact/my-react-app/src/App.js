//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import react, { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout (()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#495057';
      showAlert("Dark mode has been enabled", "success")
      document.title="textUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode is off", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      <Navbar title="ReactJS" HomeN="HomePage" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm heading="Enter text to analyze" showAlert = {showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
