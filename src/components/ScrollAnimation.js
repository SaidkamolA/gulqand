import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        },
        hidden: {
          opacity: 0,
          y: 50
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 