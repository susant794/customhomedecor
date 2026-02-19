import React from 'react';
// FIX: Imported `Variants` from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { PhoneIcon, MailIcon as EmailIcon, LocationIcon } from '../components/icons';
import { environment } from '@/environment/environment';

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

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div 
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark">Get in Touch</motion.h1>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Whether you have a question about our services or want to start a project, our team is ready to answer all your questions.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 sm:p-12 rounded-lg shadow-lg"
          >
            <h2 className="font-serif text-2xl font-bold text-brand-dark">Send us a Message</h2>
            <form action="#" method="POST" className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input type="text" name="name" id="name" autoComplete="name" required className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand-teal focus:ring-brand-teal" placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand-teal focus:ring-brand-teal" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand-teal focus:ring-brand-teal" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} required className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand-teal focus:ring-brand-teal" placeholder="Your Message"></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full justify-center rounded-md border border-transparent bg-brand-teal py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
              <div className="flex-shrink-0 bg-brand-yellow p-4 rounded-full">
                <LocationIcon className="h-6 w-6 text-brand-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">Our Address</h3>
                <p className="mt-1 text-gray-600">{`${environment?.map}`}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
              <div className="flex-shrink-0 bg-brand-yellow p-4 rounded-full">
                <EmailIcon className="h-6 w-6 text-brand-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">Email Us</h3>
                <a href="mailto:contact@customhomedecor.com" className="mt-1 text-brand-teal hover:underline">{`${environment?.email}`}</a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
              <div className="flex-shrink-0 bg-brand-yellow p-4 rounded-full">
                <PhoneIcon className="h-6 w-6 text-brand-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">Call Us</h3>
                <a href="tel:+911234567890" className="mt-1 text-brand-teal hover:underline">{`${environment?.phoneNumber1}`}</a>
              </div>
            </div>
          </motion.div>
        </div>

         {/* Map Section */}
       {/* Map Section */}
<motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mt-16"
>
    <h2 className="font-serif text-3xl font-bold text-center text-brand-dark mb-8">Find Us Here</h2>
    <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
    <iframe
  src="https://maps.google.com/maps?q=Sinjini%20Apartment%2C%20GH-1%2C%20Ground%20Floor%2C%20Kalipark%2C%20Bablatala%2C%20Kolkata-700136&t=&z=15&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map of Sinjini Apartment, GH-1, Ground Floor, Kalipark, Bablatala, Kolkata-700136"
/>
    </div>
</motion.div>

      </div>
    </div>
  );
};

export default ContactPage;