import Footer from './Components/Footer';
import Navigation from './Components/Navigation'
import AllRouters from "./Routers/AllRouters"

function App() {
  return (
    <>
    <Navigation/>
    <div className='pt-30 pb-10'>
    <AllRouters/>
    </div>
    <Footer />
    </>
  )
}

export default App;