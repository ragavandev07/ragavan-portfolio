import { ConfigProvider, theme } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#818cf8',
          colorInfo: '#f472b6',
          borderRadius: 8,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      }}
    >
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />

          <Contact />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
