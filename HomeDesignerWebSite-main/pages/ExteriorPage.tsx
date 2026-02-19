
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const exteriorProjects = [
  {
    id: 1,
    title: 'Hillside Infinity Pool',
    description: 'A breathtaking infinity pool and lounge area that capitalizes on panoramic views and natural topography.',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5b9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Modern Timber-Clad Villa',
    description: 'A striking facade combining dark timber cladding with large glass panels for a contemporary yet warm aesthetic.',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Secret Garden Courtyard',
    description: 'An intimate and secluded courtyard designed for quiet reflection, featuring a central water feature and climbing vines.',
    imageUrl: 'https://images.unsplash.com/photo-1562016461-893c84a5a8a4?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Fire & Water Terrace',
    description: 'An entertainer\'s dream terrace with a built-in fire pit, outdoor kitchen, and a sleek, minimalist water feature.',
    imageUrl: 'https://images.unsplash.com/photo-1598925437430-a57648a73531?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Sustainable Green Facade',
    description: 'A vertical garden that wraps around the building, offering natural cooling, improved air quality, and a unique visual identity.',
    imageUrl: 'https://images.unsplash.com/photo-1594434259364-0010954b3412?q=80&w=1935&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Grand Entrance Landscaping',
    description: 'A carefully curated landscape design that creates an impressive and welcoming approach to the property with layered planting and lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1447065217122-3c8350548b3b?q=80&w=2070&auto=format&fit=crop',
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

const ExteriorPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">Our Exterior Designs</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our portfolio of exterior designs that enhance curb appeal and create beautiful, functional outdoor living spaces.
          </p>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exteriorProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExteriorPage;