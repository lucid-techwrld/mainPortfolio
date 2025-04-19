import './App.css'
import Header from './components/header'
import HeroSection from './components/heroSection'
import Skills from './components/skills'
import Project from './components/project'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Offer from './components/offer'
import { Helmet, HelmetProvider } from 'react-helmet-async';







function App() {
  
  return (
    <div className='bg-gradient-to-br from-slate-900 via-zinc-700 to-black w-screen min-h-screen'>
      <HelmetProvider>
        <Helmet>
          <title>Davis Ayomide Ariyo | Software Developer</title>
          <meta name="description" content="Passionate MERN stack developer specializing in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Focused on clean code, responsive design, and delivering seamless user experiences" />
          <meta name="keywords" content="Davis Ayomide, React, Node.js, MERN, Web Developer, Portfolio" />
          <meta name="author" content="Davis Ayomide" />
          <meta property="og:title" content="Davis Ayomide| Software Developer" />
          <meta property="og:description" content="Check out my full-stack projects and contact me for collaborations." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/src/assets/favicon.png" />
          <meta property="og:url" content="https://davisayomide.netlify.app" />
        </Helmet>
      </HelmetProvider>
      
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
