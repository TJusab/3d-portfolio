import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, PetalsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter basename='3d-portfolio'>
      <div className='relative z-0 bg-primary'>
        <div className="bg-[url('/src/assets/h.png')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <PetalsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
