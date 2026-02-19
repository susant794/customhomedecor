import React from 'react';
// FIX: Imported `Variants` from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { WhatsAppIcon, InstagramIcon, MailIcon } from './icons';
import { environment } from '@/environment/environment';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    href: `https://wa.me/${environment?.whatsapp}`,
    hoverColor: 'hover:bg-[#25D366]',
    bgColor: 'bg-[#25D366]',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: `https://instagram.com/${environment?.instagram}`,
    hoverColor: 'hover:bg-[#E1306C]',
     bgColor: 'bg-[#E1306C]',
  },
  {
    name: 'Email',
    icon: MailIcon,
    href: `mailto:${environment?.email}`,
    hoverColor: 'hover:bg-[#EA4335]',
    bgColor: 'bg-[#EA4335]',
  },
];

const SocialSidebar: React.FC = () => {
  // FIX: Explicitly typed `sidebarVariants` with `Variants` to fix type inference issue where `ease` was a generic `string`.
  const sidebarVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 flex flex-col gap-2 p-2"
      aria-label="Social media links"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative flex items-center justify-center p-3 rounded-full ${link.bgColor} backdrop-blur-sm shadow-md text-brand-dark hover:text-white transition-colors duration-300 ${link.hoverColor}`}
          aria-label={`Contact us on ${link.name}`}
        >
          <link.icon className="w-6 h-6" />
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-brand-dark text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -translate-x-2 group-hover:translate-x-0 duration-300 ease-in-out shadow-lg">
            {link.name}
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-brand-dark"></div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;