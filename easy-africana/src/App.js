import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
// import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </Router>

    </>
    )
}

export default App;
