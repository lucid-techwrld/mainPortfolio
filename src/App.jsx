import './App.css'
import Header from './components/header'
import HeroSection from './components/heroSection'
import Skills from './components/skills'
import Project from './components/project'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Offer from './components/offer'
//import ChangeTheme from './components/changeTheme'





function App() {
  
  return (
    <div className='bg-gradient-to-br from-slate-900 via-zinc-700 to-black w-screen min-h-screen'>
     <Header />
     <HeroSection />
     <About />
     <Skills />
     <Offer/>
     <Project />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
