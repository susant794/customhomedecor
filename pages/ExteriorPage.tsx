
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { updatePageSEO, pageConfigs, generateServiceSchema } from '../utils/seoUtils';

const exteriorProjects = [
  {
    id: 1,
    title: 'Hillside Infinity Pool',
    description: 'A breathtaking infinity pool and lounge area that capitalizes on panoramic views and natural topography.',
    imageUrl: '/exterior/image1.jpeg',
  },
  {
    id: 2,
    title: 'Modern Timber-Clad Villa',
    description: 'A striking facade combining dark timber cladding with large glass panels for a contemporary yet warm aesthetic.',
    imageUrl: '/exterior/image2.jpeg',
  },
  {
    id: 3,
    title: 'Secret Garden Courtyard',
    description: 'An intimate and secluded courtyard designed for quiet reflection, featuring a central water feature and climbing vines.',
    imageUrl: '/exterior/image3.jpeg',
  },
  {
    id: 4,
    title: 'Fire & Water Terrace',
    description: 'An entertainer\'s dream terrace with a built-in fire pit, outdoor kitchen, and a sleek, minimalist water feature.',
    imageUrl: '/exterior/image4.jpeg',
  },
  {
    id: 5,
    title: 'Sustainable Green Facade',
    description: 'A vertical garden that wraps around the building, offering natural cooling, improved air quality, and a unique visual identity.',
    imageUrl: '/exterior/image5.jpeg',
  },
  {
    id: 6,
    title: 'Grand Entrance Landscaping',
    description: 'A carefully curated landscape design that creates an impressive and welcoming approach to the property with layered planting and lighting.',
    imageUrl: '/exterior/image6.jpeg',
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
  // Update page SEO on component mount
  useEffect(() => {
    updatePageSEO({
      ...pageConfigs.exterior,
      schema: generateServiceSchema('Exterior Design', 'Professional exterior design services including landscaping, facade design, and outdoor spaces in Kolkata, West Bengal'),
    });
  }, []);

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