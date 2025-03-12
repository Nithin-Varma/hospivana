export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  export const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  export const heroImageAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 0.1 },
    transition: { duration: 1 }
  };
  
  export const heroContentAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  };
  
  export const heroTagAnimation = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };
  
  export const statsAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.8, duration: 0.6 }
  };