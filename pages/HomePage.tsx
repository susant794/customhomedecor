import React, { useEffect, useRef, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
// FIX: Imported `Variants` from framer-motion to correctly type animation variants.
import { motion, Variants, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, QuoteIcon, InteriorIcon, ExteriorIcon, FurnitureIcon, VisualizationIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/icons';

const services = [
  {
    name: 'Interior Design',
    description: 'Crafting unique and personalized interiors that reflect your lifestyle. From concept to completion, we create spaces that inspire.',
    icon: InteriorIcon,
  },
  {
    name: 'Exterior Design',
    description: 'Enhancing curb appeal and creating functional outdoor living areas. We design beautiful facades, patios, and landscapes.',
    icon: ExteriorIcon,
  },
  {
    name: 'Furniture Design',
    description: 'Bespoke furniture pieces designed to perfectly complement your space and meet your specific needs and style.',
    icon: FurnitureIcon,
  },
  {
    name: '3D Visualization',
    description: 'Bringing your vision to life with realistic 3D renderings, allowing you to visualize the final design before construction begins.',
    icon: VisualizationIcon,
  },
];

const processSteps = [
    {
        step: "01",
        title: "Consultation",
        description: "We start by understanding your vision, needs, and budget in a detailed initial consultation."
    },
    {
        step: "02",
        title: "Design & Planning",
        description: "Our team creates a comprehensive design plan, including layouts, materials, and 3D models."
    },
    {
        step: "03",
        title: "Execution",
        description: "We manage the entire project, coordinating with contractors to ensure a seamless execution."
    },
    {
        step: "04",
        title: "Final Touches",
        description: "The final step involves adding decor and styling to bring the whole space together perfectly."
    }
];

const featuredProjects = [
  {
    title: 'Serene Sanctuary Bedroom',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop',
    link: '/interior'
  },
  {
    title: 'Alfresco Entertainment Deck',
    category: 'Exterior',
    imageUrl: 'https://images.unsplash.com/photo-1600585152203-602b8aa3a3c9?q=80&w=2070&auto=format&fit=crop',
    link: '/exterior'
  },
  {
    title: 'Open-Concept Gourmet Kitchen',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop',
    link: '/interior'
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    title: 'Apartment Owner',
    quote: "The transformation is simply stunning. They listened to our vision and brought it to life with incredible creativity and professionalism. Our home finally feels like 'us'.",
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'David Chen',
    title: 'Business Owner',
    quote: "Working with them was a seamless experience from start to finish. Their innovative design for our office has boosted morale and productivity. Highly recommended!",
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Maria Garcia',
    title: 'Family Home',
    quote: "Their team respected our budget and timeline, delivering a beautiful and functional design for our growing family. The attention to detail was exceptional.",
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  }
];

// Reusable animation variants
// FIX: Explicitly typed `sectionVariants` with `Variants` to fix type inference issue where `ease` was a generic `string`.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  })
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const HomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 4000); // Changed from 2000ms to 4000ms for better readability
        return () => clearInterval(interval);
    }, [nextTestimonial]);


  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-6 text-white text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
                Designing Spaces, <br /> Creating Experiences
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto"
            >
                A multidisciplinary studio that redefines laid-back luxury through interior architecture, design, and décor.
            </motion.p>
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
            >
                 <NavLink
                    to="/contact"
                    className="mt-8 inline-block bg-brand-yellow text-brand-dark font-bold px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                 >
                    Get a Free Consultation
                </NavLink>
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-light py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
                <h3 className="text-4xl font-bold font-serif text-brand-teal"><AnimatedNumber value={15} />+</h3>
                <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div className="p-4">
                <h3 className="text-4xl font-bold font-serif text-brand-teal"><AnimatedNumber value={500} />+</h3>
                <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div className="p-4">
                <h3 className="text-4xl font-bold font-serif text-brand-teal"><AnimatedNumber value={20} />+</h3>
                <p className="text-gray-600 mt-2">Design Awards</p>
            </div>
            <div className="p-4">
                <h3 className="text-4xl font-bold font-serif text-brand-teal"><AnimatedNumber value={99} />%</h3>
                <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-brand-dark">Our Services</h2>
            <p className="mt-4 text-gray-600">
              We offer a comprehensive range of design services to cater to your every need, transforming your vision into reality with precision and passion.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div key={service.name} variants={itemVariants} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-brand-yellow/30 rounded-full">
                  <service.icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-dark">{service.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-brand-light"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-brand-dark">Featured Projects</h2>
            <p className="mt-4 text-gray-600">
              A glimpse into our portfolio of bespoke designs that showcase our commitment to creativity and quality.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-sm bg-brand-yellow text-brand-dark px-2 py-1 rounded-sm font-semibold">{project.category}</span>
                    <h3 className="font-serif text-2xl font-bold mt-2">{project.title}</h3>
                </div>
                <NavLink to={project.link} className="absolute inset-0" aria-label={`View project: ${project.title}`}></NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Testimonial Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-6 relative">
            <QuoteIcon className="absolute top-0 left-6 text-white/10 w-24 h-24 transform -translate-y-1/2" />
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl font-bold">What Our Clients Say</h2>
            </div>
            <div className="mt-12 relative h-64 flex items-center justify-center overflow-hidden">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="w-full max-w-3xl text-center absolute"
                    >
                        <img src={testimonials[currentIndex].imageUrl} alt={testimonials[currentIndex].name} className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-brand-yellow object-cover" />
                        <p className="text-xl italic text-gray-300">"{testimonials[currentIndex].quote}"</p>
                        <p className="mt-4 font-bold text-lg">{testimonials[currentIndex].name}</p>
                        <p className="text-brand-yellow">{testimonials[currentIndex].title}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={prevTestimonial} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Previous testimonial">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                 <button onClick={nextTestimonial} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Next testimonial">
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
            </div>
             <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-brand-yellow' : 'bg-gray-500'} transition-colors`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl font-bold text-brand-dark">Our Design Process</h2>
                <p className="mt-4 text-gray-600">
                    A streamlined and collaborative journey from concept to creation, ensuring your vision is realized to perfection.
                </p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Dashed line for desktop */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px">
                  <svg width="100%" height="2">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
                  </svg>
                </div>
                {processSteps.map((step, index) => (
                    <motion.div key={index} variants={itemVariants} className="text-center relative p-6">
                        <div className="relative z-10 w-24 h-24 mx-auto flex items-center justify-center bg-brand-light rounded-full border-4 border-white shadow-md">
                            <span className="font-serif text-3xl font-bold text-brand-teal">{step.step}</span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-brand-dark mt-6">{step.title}</h3>
                        <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section className="bg-brand-teal text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to start your project?</h2>
            <p className="mt-2 max-w-2xl">Let's collaborate to create a space that is uniquely yours.</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 md:mt-0"
          >
            <NavLink to="/contact" className="bg-brand-yellow text-brand-dark font-bold px-8 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300">
                Contact Us <ArrowRightIcon className="w-5 h-5" />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;