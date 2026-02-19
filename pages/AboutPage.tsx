import React from 'react';
// FIX: Imported `Variants` from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRightIcon, InteriorIcon, ExteriorIcon, FurnitureIcon } from '../components/icons';

const teamMembers = [
  {
    name: 'Jordyn Dorwart',
    role: 'Founder & Lead Designer',
    imageUrl: 'https://picsum.photos/id/64/400/400',
    bio: 'With over 15 years of experience, Jordyn leads our creative vision with a passion for timeless design.'
  },
  {
    name: 'Alex Johnson',
    role: 'Head of Architecture',
    imageUrl: 'https://picsum.photos/id/1027/400/400',
    bio: 'Alex specializes in sustainable architecture, blending functionality with environmental consciousness.'
  },
  {
    name: 'Samantha Lee',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/id/343/400/400',
    bio: 'Samantha ensures every project is executed flawlessly, on time, and within budget, with meticulous attention to detail.'
  },
];

const values = [
  {
    name: 'Creativity',
    description: 'We push the boundaries of design to create spaces that are both unique and deeply personal.',
    icon: FurnitureIcon
  },
  {
    name: 'Quality Craftsmanship',
    description: 'We are committed to the highest standards of quality, using the finest materials and skilled artisans.',
    icon: InteriorIcon
  },
  {
    name: 'Client Collaboration',
    description: 'Your vision is our blueprint. We work hand-in-hand with you to bring your dream space to life.',
    icon: ExteriorIcon
  }
];

// FIX: Explicitly typed `sectionVariants` with `Variants` to fix type inference issue where `ease` was a generic `string`.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutPage: React.FC = () => {
   const handleClick=()=>{
     window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-bold"
          >
            About CUSTOM HOME DECOR
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl max-w-2xl"
          >
            Designing dreams and creating realities since 2000.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24"
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Design team collaborating" className="rounded-lg shadow-xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl font-bold text-brand-dark">Our Story</h2>
            <p className="mt-6 text-gray-600">
              Founded in 2000, CUSTOM HOME DECOR was born from a passion for transforming spaces into personalized sanctuaries. We believe that a well-designed space can profoundly impact one's quality of life. Our journey began with a small team of dedicated designers and has grown into a multidisciplinary studio renowned for its innovative approach and commitment to excellence.
            </p>
            <p className="mt-4 text-gray-600">
              We specialize in creating laid-back luxury, where comfort and sophistication coexist harmoniously. Every project is a unique story, and we are dedicated to telling yours through thoughtful design and impeccable execution.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-brand-light"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold">Our Core Values</h2>
            <p className="mt-4 text-gray-600">
              The principles that guide our work and define our studio's culture.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div key={value.name} variants={itemVariants} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-brand-teal" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-dark">{value.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet The Team Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold">Meet Our Creative Team</h2>
            <p className="mt-4 text-gray-600">
              The talented individuals behind our award-winning designs.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-brand-dark">{member.name}</h3>
                <p className="text-brand-teal">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* CTA Section */}
       <section className="bg-brand-dark text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to start your project?</h2>
          <p className="mt-4 max-w-2xl mx-auto">Let's collaborate to create a space that is uniquely yours. Get in touch with us today to schedule a consultation.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block"
          >
            <NavLink to="/contact" onClick={handleClick} className="bg-brand-yellow text-brand-dark font-bold px-8 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300">
                Contact Us <ArrowRightIcon className="w-5 h-5" />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;