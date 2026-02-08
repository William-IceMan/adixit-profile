import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="pb-10 text-center">
      <div className="font-mono text-xs text-slate hover:text-green transition-colors cursor-default">
        <a 
            href="https://github.com/bchiang7/v4" 
            target="_blank" 
            rel="noreferrer"
            className="block mb-2 hover:text-green transition-colors"
        >
            Built by {PROFILE.name}
        </a>
      </div>
    </footer>
  );
};

export default Footer;