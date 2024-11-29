
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPage from './Pages/LandingPage'
import Homepage from './Pages/Homepage'
import Footer from './components/Footer'
import Aboutpage from './Pages/Aboutpage'
import Productspage from './Pages/Productspage'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/products' element={<Productspage/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
