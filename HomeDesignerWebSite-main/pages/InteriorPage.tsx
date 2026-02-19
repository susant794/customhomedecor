
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const interiorProjects = [
  {
    id: 1,
    title: 'The Glass House Retreat',
    description: 'Floor-to-ceiling windows and an open-plan layout define this modern home, blurring the lines between the interior and the surrounding nature.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Urban Industrial Kitchen',
    description: 'A functional yet stylish kitchen featuring exposed brick, stainless steel, and reclaimed wood for a chic, industrial aesthetic.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886290705?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Coastal Serenity Bedroom',
    description: 'A tranquil master bedroom that captures the essence of coastal living with a light, airy palette and natural textures.',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16da31?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Velvet & Gold Lounge',
    description: 'An opulent lounge area designed for entertaining, with rich velvet upholstery, brass accents, and custom mood lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Minimalist Home Office',
    description: 'A clutter-free workspace designed for focus and creativity, featuring integrated storage and ergonomic furniture.',
    imageUrl: 'https://images.unsplash.com/photo-1596495577886-d9256f44238b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Spa-Inspired Bathroom',
    description: 'A luxurious bathroom transformed into a personal spa with a freestanding tub, rainfall shower, and natural stone details.',
    imageUrl: 'https://images.unsplash.com/photo-1599954033328-ca655a6d5c56?q=80&w=1964&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.5
    }
  },
};

const InteriorPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">Our Interior Designs</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a curated collection of our finest interior design projects, where creativity meets functionality to transform spaces.
          </p>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InteriorPage;