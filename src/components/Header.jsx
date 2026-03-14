import React from 'react';
import { Linkedin, Github, Share2 } from 'lucide-react';

const LeetCodeIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.556-1.387.039-1.901l-2.606-2.636a4.46 4.46 0 0 0-3.152-1.228 4.444 4.444 0 0 0-3.153 1.25l-4.225 4.31a4.524 4.524 0 0 0-1.293 3.197 4.524 4.524 0 0 0 1.293 3.208l4.225 4.311A4.444 4.444 0 0 0 10.37 22.4a4.46 4.46 0 0 0 3.154-1.228l2.605-2.636c.518-.515.498-1.366-.038-1.902-.535-.535-1.386-.553-1.889-.004zM20.72 10.457L11.758 1.48a1.35 1.35 0 0 0-1.91 0 1.35 1.35 0 0 0 0 1.911l8.006 8.01a1.35 1.35 0 0 0 1.91 0 1.35 1.35 0 0 0 0-1.91l-.956-.954v-.09zm-2.404 4.603H10.59a1.35 1.35 0 0 0-1.349 1.35c0 .746.603 1.35 1.35 1.35h7.727a1.35 1.35 0 0 0 1.348-1.35 1.35 1.35 0 0 0-1.348-1.35z" />
  </svg>
);

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo relative">
          <div id="header-profile-circle" className="w-[44px] h-[44px] rounded-full overflow-hidden flex items-center justify-center bg-transparent border border-white/10 relative transition-all duration-300">
            <strong className="text-sm z-10 text-white font-bold transition-opacity duration-300" id="header-logo-text">CHE</strong>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/chrisharrisedmond/?skipRedirect=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={22} /></a>
          <a href="https://github.com/chris-h-edmond" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={22} /></a>
          <a href="https://leetcode.com/u/chris-h-edmond/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon size={22} /></a>
          <a href="#" aria-label="Share"><Share2 size={22} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
