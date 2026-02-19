

import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
// FIX: Imported `Variants` from framer-motion to correctly type animation variants.
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InteriorPage from './pages/InteriorPage';
import ExteriorPage from './pages/ExteriorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SocialSidebar from './components/SocialSidebar';
import { CloseIcon, CheckCircleIcon, UserIcon, MailIcon, PhoneIcon, SparklesIcon, ArrowRightIcon } from './components/icons';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const InquiryPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number with at least 10 digits.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return; // Stop submission if there are errors
    }

    setFormStatus('submitting');
    console.log('Form Submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    // Close modal after showing success message
    setTimeout(() => {
        onClose();
    }, 2500);
  };

  // Reset form when modal is closed externally
  useEffect(() => {
    if (!isOpen) {
        setTimeout(() => {
            setFormStatus('idle');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            setErrors({});
        }, 300); // delay to allow exit animation
    }
  }, [isOpen]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // FIX: Explicitly typed `modalVariants` with `Variants` to resolve type error.
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2, ease: 'easeIn' } },
  };
  
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  // FIX: Explicitly typed `formItemVariants` with `Variants` to resolve type error.
  const formItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };


  const ErrorMessage: React.FC<{ message?: string, id: string }> = ({ message, id }) => (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          aria-live="polite"
        >
          <motion.div
            variants={modalVariants}
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            {/* Image Section */}
            {/* <div className="w-full h-48 md:h-auto md:w-1/2 relative">
                <img 
                    src="./logo.png" 
                    alt="Modern interior design" 
                    className="absolute h-full w-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-brand-dark/50 p-8 flex flex-col justify-end text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                    >

                        <h3 className="font-serif text-3xl font-bold">Let's Design Your Dream Home.</h3>
                        <p className="mt-2 text-white/90 hidden md:block">Your vision, our expertise. Fill out the form to begin your journey with us.</p>
                    </motion.div>
                </div>
            </div> */}
         <div className="w-full h-48 md:h-auto md:w-1/2 relative">
  {/* <img 
    src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1854&auto=format&fit=crop" 
    alt="Modern interior design" 
    className="absolute h-full w-full object-cover" 
  /> */}

  {/* White overlay behind text */}
  <div className="absolute inset-0 bg-white/95 p-8 flex flex-col justify-center items-center text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
      className="flex flex-col items-center"
    >
      {/* Big logo centered */}
      <img src="./logo.png" alt="Logo" className="h-37 w-auto mb-4" />

      <h3 className="font-serif text-3xl font-bold text-gray-900" style={{ color: '#39B066' }}>Let's Design Your Dream Home.</h3>
      <p className="mt-2 text-gray-700 hidden md:block" style={{ color: '#0c697eff' }}>
        Your vision, our expertise. Fill out the form to begin your journey with us.
      </p>
    </motion.div>
  </div>
</div>



            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 relative">
                <button 
                  onClick={onClose} 
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10" 
                  aria-label="Close popup"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8 flex flex-col items-center justify-center h-full"
                    >
                      <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h2 className="font-serif text-2xl font-bold text-brand-dark mb-2">Thank You!</h2>
                      <p className="text-gray-600">Your inquiry has been sent. We will get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      variants={formContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0 }}
                    >
                      <motion.div variants={formItemVariants} className="text-center md:text-left mb-6">
                        <h2 id="popup-title" className="font-serif text-2xl font-bold text-brand-dark mb-2">Start Your Project</h2>
                        <p className="text-gray-600">
                          Get a free, no-obligation consultation.
                        </p>
                      </motion.div>
                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <motion.div variants={formItemVariants}>
                          <label htmlFor="popup-name" className="sr-only">Full name</label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                <UserIcon className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input type="text" name="name" id="popup-name" value={formData.name} onChange={handleChange} autoComplete="name" required 
                              className={`block w-full rounded-md py-3 pl-10 pr-4 placeholder-gray-500 shadow-sm transition-colors ${errors.name ? 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-teal focus:ring-brand-teal'}`}
                              placeholder="Full name" aria-invalid={!!errors.name} aria-describedby="popup-name-error" />
                          </div>
                          <ErrorMessage message={errors.name} id="popup-name-error" />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                          <label htmlFor="popup-email" className="sr-only">Email</label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                <MailIcon className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input id="popup-email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required 
                              className={`block w-full rounded-md py-3 pl-10 pr-4 placeholder-gray-500 shadow-sm transition-colors ${errors.email ? 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-teal focus:ring-brand-teal'}`}
                              placeholder="Email address" aria-invalid={!!errors.email} aria-describedby="popup-email-error" />
                           </div>
                          <ErrorMessage message={errors.email} id="popup-email-error" />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                          <label htmlFor="popup-phone" className="sr-only">Phone Number</label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                <PhoneIcon className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input type="tel" name="phone" id="popup-phone" value={formData.phone} onChange={handleChange} autoComplete="tel" required 
                              className={`block w-full rounded-md py-3 pl-10 pr-4 placeholder-gray-500 shadow-sm transition-colors ${errors.phone ? 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-teal focus:ring-brand-teal'}`}
                              placeholder="Phone Number" aria-invalid={!!errors.phone} aria-describedby="popup-phone-error" />
                          </div>
                          <ErrorMessage message={errors.phone} id="popup-phone-error" />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                          <label htmlFor="popup-service" className="sr-only">Service of Interest</label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                <SparklesIcon className="h-5 w-5 text-gray-400"/>
                            </div>
                            <select id="popup-service" name="service" value={formData.service} onChange={handleChange} required 
                              className={`block w-full appearance-none rounded-md py-3 pl-10 pr-4 text-gray-500 shadow-sm transition-colors ${formData.service === '' ? 'text-gray-500' : 'text-brand-dark'} ${errors.service ? 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-teal focus:ring-brand-teal'}`}
                              aria-invalid={!!errors.service} aria-describedby="popup-service-error">
                              <option value="" disabled>Select a service...</option>
                              <option value="interior">Interior Design</option>
                              <option value="exterior">Exterior Design</option>
                              <option value="both">Both Interior & Exterior</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <ErrorMessage message={errors.service} id="popup-service-error" />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                          <label htmlFor="popup-message" className="sr-only">Message</label>
                          <textarea
                            id="popup-message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand-teal focus:ring-brand-teal"
                            placeholder="Tell us a bit about your project... (optional)"
                          ></textarea>
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                          <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="w-full flex items-center justify-center rounded-md border border-transparent bg-brand-teal py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                          >
                            {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                            {formStatus !== 'submitting' && <ArrowRightIcon className="w-5 h-5 ml-2" />}
                          </motion.button>
                        </motion.div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-dark">
      <Header />
      <SocialSidebar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenInquiryPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenInquiryPopup', 'true');
      }, 15000); // 30 seconds

      return () => clearTimeout(timer);
    }

  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/exterior" element={<ExteriorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <InquiryPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}

export default App;