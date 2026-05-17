/**
 * SEO Utility Functions for optimizing page titles, meta descriptions, and structured data
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

// Local business information for structured data
export const businessInfo = {
  name: 'Custom Home Decor',
  address: 'New Town, Kolkata, West Bengal, India',
  phone: '+91-8100014343',
  email: 'customhomedecor.studio@gmail.com',
  website: 'https://customhomedecor.in',
  latitude: 22.5726,
  longitude: 88.4318,
  services: ['Interior Design', 'Exterior Design', 'Furniture Design', '3D Visualization'],
};

/**
 * Update page title and meta tags
 */
export const updatePageSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  updateMetaTag('description', config.description);
  updateMetaTag('keywords', config.keywords);
  updateMetaTag('og:title', config.ogTitle || config.title, 'property');
  updateMetaTag('og:description', config.ogDescription || config.description, 'property');
  
  if (config.ogImage) {
    updateMetaTag('og:image', config.ogImage, 'property');
  }

  // Update canonical URL
  const canonicalUrl = window.location.origin + window.location.pathname;
  updateMetaTag('canonical', canonicalUrl, 'rel');

  // Update structured data if provided
  if (config.schema) {
    updateStructuredData(config.schema);
  }
};

/**
 * Helper function to update meta tags
 */
const updateMetaTag = (
  name: string,
  content: string,
  type: 'name' | 'property' | 'rel' = 'name'
) => {
  let element = document.querySelector(
    `meta[${type}="${name}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(type, name);
    document.head.appendChild(element);
  }

  element.content = content;
};

/**
 * Update JSON-LD structured data
 */
const updateStructuredData = (schema: Record<string, any>) => {
  // Remove old structured data if exists
  const oldScript = document.querySelector('script[type="application/ld+json"][data-page-schema]');
  if (oldScript) {
    oldScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-page-schema', 'true');
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Generate LocalBusiness schema for structured data
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://customhomedecor.in',
    name: businessInfo.name,
    description: 'Top-rated interior and exterior design studio in New Town, Kolkata. Specializing in home, flat, office, and modular kitchen interiors across West Bengal.',
    url: businessInfo.website,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Town',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
      streetAddress: 'New Town, Kolkata',
      postalCode: '700135',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.latitude,
      longitude: businessInfo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Kolkata',
        state: 'West Bengal',
      },
      {
        '@type': 'State',
        name: 'West Bengal',
      },
    ],
    priceRange: '₹₹',
    image: 'https://customhomedecor.in/logo.png',
    sameAs: [
      'https://www.facebook.com/customhomedecor',
      'https://www.instagram.com/customhomedecor',
      'https://www.linkedin.com/company/customhomedecor',
    ],
  };
};

/**
 * Generate Organization schema for structured data
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    url: businessInfo.website,
    logo: 'https://customhomedecor.in/logo.png',
    description: 'Premium interior and exterior design studio in Kolkata',
    sameAs: [
      'https://www.facebook.com/customhomedecor',
      'https://www.instagram.com/customhomedecor',
      'https://www.linkedin.com/company/customhomedecor',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: businessInfo.phone,
      email: businessInfo.email,
    },
  };
};

/**
 * Generate Service schema for structured data
 */
export const generateServiceSchema = (serviceName: string, description: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      url: businessInfo.website,
      telephone: businessInfo.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'West Bengal',
    },
  };
};

/**
 * SEO Configuration for each page
 */
export const pageConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Custom Home Decor – Best Interior Designer in New Town, Kolkata | Premium Design Services',
    description: 'Top-rated interior & exterior design studio in New Town, Kolkata. Affordable home, flat, office & modular kitchen design. Free consultation. Call now!',
    keywords: 'interior designer New Town Kolkata, home interior design Kolkata, interior design New Town, affordable interior designer, best interior designer West Bengal, modular kitchen Kolkata, bedroom interior design, office interior design',
    ogTitle: 'Custom Home Decor – Best Interior Designer in Kolkata',
    ogDescription: 'Professional interior and exterior design services in New Town, Kolkata. Transform your space with our expert designers.',
  },
  interior: {
    title: 'Interior Design Services in Kolkata | Professional Home Interior Designer | Custom Home Decor',
    description: 'Professional interior design for homes, flats, offices & modular kitchens in Kolkata. View our portfolio of stunning interior transformations. Get free consultation today!',
    keywords: 'interior design Kolkata, home interior design Kolkata, flat interior design New Town, modular kitchen design, bedroom interior design Kolkata, office interior design, interior designer Kolkata, best interior designer New Town',
    ogTitle: 'Interior Design Services in Kolkata | Custom Home Decor',
    ogDescription: 'Explore our award-winning interior design portfolio. Transform your space with expert designers in New Town, Kolkata.',
  },
  exterior: {
    title: 'Exterior Design Services in Kolkata | Landscape & Facade Design | Custom Home Decor',
    description: 'Expert exterior design services including landscaping, facade design, and outdoor spaces in Kolkata. View our stunning exterior portfolio and transform your outdoor area today!',
    keywords: 'exterior design Kolkata, landscape design, facade design Kolkata, outdoor design, garden design Kolkata, exterior designer West Bengal',
    ogTitle: 'Exterior Design Services in Kolkata | Custom Home Decor',
    ogDescription: 'Professional exterior and landscape design services in Kolkata. Create stunning outdoor spaces with our expert team.',
  },
  about: {
    title: 'About Custom Home Decor | Award-Winning Interior Design Studio in Kolkata',
    description: 'Learn about our team of expert designers at Custom Home Decor. Over years of experience creating beautiful interior and exterior spaces in Kolkata and West Bengal.',
    keywords: 'about custom home decor, interior design studio Kolkata, design team, award-winning designers, interior design company',
    ogTitle: 'About Our Design Studio | Custom Home Decor',
    ogDescription: 'Meet the team of expert designers behind Custom Home Decor studio in Kolkata.',
  },
  contact: {
    title: 'Contact Custom Home Decor | Free Interior Design Consultation in Kolkata',
    description: 'Get in touch for your interior or exterior design project. Free consultation. Call +91-8100014343 or fill our contact form. Response within 24 hours.',
    keywords: 'contact interior designer Kolkata, custom home decor contact, design consultation, interior design inquiry, free consultation Kolkata',
    ogTitle: 'Contact Us – Custom Home Decor',
    ogDescription: 'Contact our design team in Kolkata for a free consultation on your interior or exterior design project.',
  },
};
