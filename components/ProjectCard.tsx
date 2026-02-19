
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
  variants?: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  return (
    <motion.div 
      variants={variants}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col h-full"
    >
      <div className="overflow-hidden h-56">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-serif text-xl font-semibold text-brand-dark">{project.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;