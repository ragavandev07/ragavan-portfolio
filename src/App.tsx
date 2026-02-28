import { ConfigProvider, theme } from 'antd';
import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    window.scrollTo(0, 0);
    setShowIntro(false);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#818cf8',
          colorInfo: '#06b6d4',
          borderRadius: 8,
          fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      }}
    >
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <div className="app" style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 0.5s' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
