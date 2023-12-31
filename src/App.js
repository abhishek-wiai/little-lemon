import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Reserve from './components/Reserve/Reserve';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
<Header/>

<Routes>
    <Route index element={<Home />} />
    <Route path='reserve' element={<Reserve />} />
    </Routes>

<Footer/>
   </>
  );
}

export default App;
