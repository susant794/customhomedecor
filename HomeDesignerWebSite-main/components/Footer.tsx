import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramIcon, MailIcon, WhatsAppIcon } from './icons';
import { environment } from '@/environment/environment';

const Footer: React.FC = () => {
  const linkClass = "text-gray-400 hover:text-white transition-colors";
  const handleClick=()=>{
     window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer id="footer" className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-2xl font-bold font-serif text-white">CUSTOM HOME DECOR</h2>
            <p className="text-gray-400 text-sm max-w-md">
              An acclaimed multidisciplinary studio specializing in interior architecture, design, and décor that redefines laid-back luxury.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={`https://wa.me/${environment?.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
              <a href={`https://instagram.com/${environment?.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href={`mailto:${environment?.email}`} className="text-gray-400 hover:text-[#EA4335] transition-colors"><MailIcon className="w-6 h-6" /></a>
            </div>
          </div>
          
          {/* Column 2: Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className={linkClass} onClick={handleClick}>About Us</NavLink></li>
              <li><NavLink to="/contact" className={linkClass} onClick={handleClick}>Contact Us</NavLink></li>
              <li><a href="#" className={linkClass} onClick={handleClick}>Blog</a></li>
              <li><a href="#" className={linkClass} onClick={handleClick}>Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/interior" className={linkClass} onClick={handleClick}>Interior Design</NavLink></li>
              <li><NavLink to="/exterior" className={linkClass} onClick={handleClick}>Exterior Design</NavLink></li>
              <li><a href="#" className={linkClass} onClick={handleClick}>3D Rendering</a></li>
              <li><a href="#" className={linkClass} onClick={handleClick}>Consultation</a></li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CUSTOM HOME DECOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;