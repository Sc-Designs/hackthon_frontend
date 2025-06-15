import Footer from './Components/Footer';
import Navigation from './Components/Navigation'
import AllRouters from "./Routers/AllRouters"
import { useSelector } from 'react-redux';

function App() {
  return (
    <>
       <Navigation/>
    <AllRouters/>
           <Footer />
    </>
  )
}

export default App;