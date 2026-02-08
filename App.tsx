import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy font-sans selection:bg-lightest-navy selection:text-green">
      <Header />
      <main className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full">
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;