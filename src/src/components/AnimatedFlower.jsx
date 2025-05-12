import { motion } from 'framer-motion';
import flowerSvg from '../assets/flower.svg'; // Flower SVG

const AnimatedFlower = ({ position }) => {
  const positions = {
    'top-left': { top: '-20px', left: '-20px' },
    'top-right': { top: '-20px', right: '-20px' },
    'bottom-left': { bottom: '-20px', left: '-20px' },
    'bottom-right': { bottom: '-20px', right: '-20px' },
  };

  return (
    <motion.img
      src={flowerSvg}
      alt="Flower"
      className={`flower ${position}`}
      style={{ position: 'absolute', ...positions[position] }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default AnimatedFlower;