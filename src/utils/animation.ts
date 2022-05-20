import { Variants } from 'framer-motion';

export const animateH = (duration: number, delay: number = 0): Variants => {
  return {
    initial: {
      height: '0px',
      opacity: 0
    },
    animate: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeIn',
        delay: delay
      }
    }
  };
};

export const animateO = (duration: number, delay: number = 0): Variants => {
  return {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeIn',
        delay: delay
      }
    }
  };
};
