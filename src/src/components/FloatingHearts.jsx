// filepath: c:\Users\slewi\Mothers_Day\src\components\FloatingHearts.jsx
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 10 }); // Create 10 hearts

  // Generate random colors for each heart
  const heartColors = hearts.map(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  });

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * window.innerWidth, // Random horizontal position
            y: window.innerHeight + 50, // Start below the screen
            opacity: 0,
          }}
          animate={{
            y: -50, // Float upward
            opacity: [0, 1, 0], // Fade in and out
          }}
          transition={{
            duration: 4 + Math.random() * 2, // Random duration
            repeat: Infinity, // Repeat forever
            delay: Math.random() * 2, // Random delay
          }}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            color: heartColors[index], // Assign a pre-generated random color to each heart
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;