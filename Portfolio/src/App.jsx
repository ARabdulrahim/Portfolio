import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Sociallinks from './Components/Sociallinks'
import Contact from './Components/Contact'


function App() {
 

  return (
    <>
      <div>

        <Navbar />
        <Home />
        <Sociallinks/>
        <About />
        <Portfolio />
        <Experience />
         <Contact />
      </div>
    </>
  )
}

export default App
