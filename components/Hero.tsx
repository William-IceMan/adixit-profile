import React from 'react';
import { PROFILE } from '../constants';
import resumePdf from './Amit_Dixit_Resume.pdf';
import profileImg from './profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center max-w-[1000px] mx-auto">
        
        {/* Text Content */}
        <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col items-start">
          <p className="text-green font-mono mb-5 ml-1">Hi, my name is</p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate tracking-tight mb-4">
            {PROFILE.name}.
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
            I build things for the backend.
          </h2>
          
          <p className="text-slate text-lg leading-relaxed max-w-xl mb-12">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className="text-green">Coforge</span>.
          </p>

          <a 
            href={resumePdf}
            download="Amit_Dixit_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-green border border-green rounded hover:bg-green/10 transition-all duration-300 font-mono text-sm"
          >
            Check out my resume!
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center lg:justify-end relative group">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* The Border Effect */}
            <div className="absolute inset-0 border-2 border-green rounded transition-transform duration-300 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
            
            {/* The Image Container */}
            <div className="relative w-full h-full rounded overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <img 
                src={profileImg} 
                alt="Amit Dixit" 
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to a placeholder if local image fails
                    target.src = "https://ui-avatars.com/api/?name=Amit+Dixit&background=112240&color=64ffda&size=400";
                    target.style.filter = 'none';
                }}
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;