import { Card, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SurpriseCard = ({ onClose }) => {
  const prizes = [
    'Free movie tickets',
    'Fancy Chocolate',
    'Goonies shirt',
    'Spa Day',
    'Dinner for Two',
  ];
  const [poppedHeart, setPoppedHeart] = useState(null); // Track which heart was clicked

  const handleHeartClick = (index) => {
    if (poppedHeart === null) {
      setPoppedHeart(index); // Set the clicked heart index
    }
  };

  return (
    <Card
      sx={{
        width: '400px', // Fixed width
        height: '400px', // Fixed height
        margin: '0 auto',
        background: 'linear-gradient(135deg, #ffe4e1, #fff0f5)',
        borderRadius: 16,
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        {prizes.map((prize, index) => {
          const positions = [
            { top: '20%', left: '25%' },
            { top: '20%', left: '75%' },
            { top: '50%', left: '50%' },
            { top: '80%', left: '25%' },
            { top: '80%', left: '75%' },
          ];

          return (
            <motion.div
              key={index}
              initial={{ y: 0, scale: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                position: 'absolute',
                top: positions[index].top,
                left: positions[index].left,
                transform: 'translate(-50%, -50%)',
                cursor: poppedHeart === null ? 'pointer' : 'default',
              }}
              onClick={() => handleHeartClick(index)}
            >
              {poppedHeart === index ? (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: '2.5rem', color: '#ff6b81' }}
                >
                  ❤️
                </motion.div>
              ) : (
                <motion.div
                  whileHover={poppedHeart === null ? { scale: 1.3 } : {}}
                  whileTap={poppedHeart === null ? { scale: 0.9 } : {}}
                  style={{ fontSize: '2.5rem', color: '#ff6b81' }}
                >
                  ❤️
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      {poppedHeart !== null && prizes[poppedHeart] && (
        <Typography variant="h4" sx={{ color: '#6a1b9a', marginTop: '2rem' }}>
          You won: {prizes[poppedHeart]}!
        </Typography>
      )}
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
        onClick={onClose} // Close the SurpriseCard
      >
        Back
      </Button>
    </Card>
  );
};

export default SurpriseCard;