
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { updatePageSEO, pageConfigs, generateServiceSchema } from '../utils/seoUtils';

const interiorProjects = [
  {
    id: 1,
    title: 'The Glass House Retreat',
    description: 'Floor-to-ceiling windows and an open-plan layout define this modern home, blurring the lines between the interior and the surrounding nature.',
    imageUrl: '/interior/image6.jpg',
  },
  {
    id: 2,
    title: 'Urban Industrial Kitchen',
    description: 'A functional yet stylish kitchen featuring exposed brick, stainless steel, and reclaimed wood for a chic, industrial aesthetic.',
    imageUrl: '/interior/Image1.jpeg',
  },
  {
    id: 3,
    title: 'Coastal Serenity Bedroom',
    description: 'A tranquil master bedroom that captures the essence of coastal living with a light, airy palette and natural textures.',
    imageUrl: '/interior/Image2.jpeg',  
  },
  {
    id: 4,
    title: 'Velvet & Gold Lounge',
    description: 'An opulent lounge area designed for entertaining, with rich velvet upholstery, brass accents, and custom mood lighting.',
    imageUrl: '/interior/image3.jpeg',
  },
  {
    id: 5,
    title: 'Minimalist Home Office',
    description: 'A clutter-free workspace designed for focus and creativity, featuring integrated storage and ergonomic furniture.',
    imageUrl: '/interior/image4.jpeg',
  },
  {
    id: 6,
    title: 'Spa-Inspired Bathroom',
    description: 'A luxurious bathroom transformed into a personal spa with a freestanding tub, rainfall shower, and natural stone details.',
    imageUrl: '/interior/image5.jpg',
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
  // Update page SEO on component mount
  useEffect(() => {
    updatePageSEO({
      ...pageConfigs.interior,
      schema: generateServiceSchema('Interior Design', 'Professional interior design services for homes, flats, offices, and modular kitchens in Kolkata, New Town, West Bengal'),
    });
  }, []);

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