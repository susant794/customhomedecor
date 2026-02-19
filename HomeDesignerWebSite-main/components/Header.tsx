import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// FIX: Imported `Variants` from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PhoneIcon, MailIcon } from './icons';
import { environment } from '@/environment/environment';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Interior', path: '/interior' },
  { name: 'Exterior', path: '/exterior' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const contactDetails = [
    {
        icon: PhoneIcon,
        text: `+91 ${environment?.phoneNumber1}`,
        href: `tel:+91${environment?.phoneNumber1}`
    },
    {
        icon: PhoneIcon,
         text: `+91 ${environment?.phoneNumber2}`,
        href: `tel:+91${environment?.phoneNumber2}`
    },
    {
        icon: MailIcon,
        text: `${environment?.email}`,
        href: `mailto:${environment?.email}`
    }
]

const logoBase64 = "../actual_logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const handleClick=()=>{
     window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    textDecorationColor: '#2D7A73',
    textDecorationThickness: '2px',
    color: '#2D7A73',
  };

  const activeMobileLinkStyle = {
    color: '#2D7A73',
    fontWeight: '600',
  };

  // FIX: Explicitly typed `mobileMenuVariants` with `Variants` to fix type inference issue.
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <motion.header 
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-brand-light sticky top-0 z-50 shadow-sm"
    >
      {/* Top Contact Bar */}
<div className="bg-brand-dark text-white">
  <div className="container mx-auto px-6 py-1 flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-1 text-sm">
            {contactDetails.map((item, index) => (
                 <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                     <motion.div
                        animate={{
                            boxShadow: [
                            "0 0 0px rgba(244, 206, 112, 0)",
                            "0 0 10px rgba(244, 206, 112, 0.6)",
                            "0 0 0px rgba(244, 206, 112, 0)",
                            ]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            delay: 1 + index * 0.2
                        }}
                        className="p-1 rounded-full"
                    >
                       <item.icon className="w-4 h-4 text-brand-yellow" />
                    </motion.div>
                    <span>{item.text}</span>
                 </motion.a>
            ))}
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="flex items-center gap-3 z-[60]" 
          aria-label="CUSTOM HOME DECOR Home Page"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          <img src={logoBase64} alt="CUSTOM HOME DECOR Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold font-serif text-brand-dark leading-tight">CUSTOM HOME DECOR</h1>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2 }}>
              <NavLink
              onClick={handleClick}
                to={link.path}
                end={link.path === '/'}
                className="text-gray-600 hover:text-brand-teal transition-colors duration-300"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        <motion.a
          href="../Tumpa_Di.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-brand-teal text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
        >
          Download Designs
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="z-[60] relative p-2 -mr-2"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-brand-light z-[55] flex justify-center pt-32"
          >
            <nav className="flex flex-col items-center text-center space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl text-gray-700 hover:text-brand-teal transition-colors duration-300"
                  style={({ isActive }) => (isActive ? activeMobileLinkStyle : {})}
                >
                  {link.name}
                </NavLink>
              ))}
              <motion.a
                href="../Tumpa_Di.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-brand-teal text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Designs
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;