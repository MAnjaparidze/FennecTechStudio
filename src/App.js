import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    handleRedirect();
  }, [])

  const handleRedirect = () => {
    setTimeout(() => {
      window.location.replace("https://www.youtube.com/c/FennecTechStudio");
    }, 2000)
  }

  return (
    <div className="App">
      <div className='loader'></div>
      <div className='fennec_logo'></div>
    </div>
  );
}

export default App;
