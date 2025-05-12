import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Button } from '@mui/material';

const SpinningHearts = ({ onClose }) => {
  const prizes = [
    'Free movie tickets',
    'Fancy Chocolate',
    'Goonies shirt',
    'Spa Day',
    'Dinner for Two',
  ];
  const [poppedHeart, setPoppedHeart] = useState(null);

  const handleHeartClick = (index) => {
    setPoppedHeart(index);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', position: 'relative', height: '400px', width: '100%' }}>
      {/* Floating Hearts */}
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        {prizes.map((prize, index) => {
          // Assign fixed positions for each heart
          const positions = [
            { top: '20%', left: '15%' }, // Heart 1
            { top: '35%', left: '40%' }, // Heart 2
            { top: '50%', left: '65%' }, // Heart 3
            { top: '65%', left: '30%' }, // Heart 4
            { top: '80%', left: '80%' }, // Heart 5
          ];

          return (
            <motion.div
              key={index}
              initial={{
                y: 0,
                scale: 1,
              }}
              animate={{
                y: [0, -15, 0], // Floating effect
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                top: positions[index].top,
                left: positions[index].left,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
              }}
              onClick={() => handleHeartClick(index)}
            >
              {poppedHeart === index ? (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontSize: '5rem', // Larger size for the hearts
                    color: '#ff6b81',
                  }}
                >
                  ❤️
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    fontSize: '5rem', // Larger size for the hearts
                    color: '#ff6b81',
                  }}
                >
                  ❤️
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Prize Reveal */}
      {poppedHeart !== null && (
        <Typography
          variant="h4"
          sx={{ color: '#6a1b9a', marginTop: '2rem' }}
        >
          You won: {prizes[poppedHeart]}!
        </Typography>
      )}

      {/* Back Button */}
      <Button
        variant="outlined"
        sx={{
          marginTop: '2rem',
          color: '#6a1b9a',
          borderColor: '#6a1b9a',
          '&:hover': {
            borderColor: '#4a148c',
            color: '#4a148c',
          },
        }}
        onClick={onClose}
      >
        Back
      </Button>
    </div>
  );
};

export default SpinningHearts;