import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import {useSelector, useDispatch} from 'react-redux'
import {darkMode, lightMode} from './features/modeSlice'

function App() {
  const mode = useSelector((state)=> state.mode);
  const dispatch =  useDispatch();
  const toggleMode =()=>{
    mode.darkMode ? dispatch(lightMode()): dispatch(darkMode())
  };
  
  
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{mode.darkMode ? 'Light Mode': 'Dark mode'}</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
