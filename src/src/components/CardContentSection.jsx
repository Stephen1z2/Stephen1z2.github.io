import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingHearts from './FloatingHearts'; // FloatingHearts remains independent
import SurpriseCard from './SurpriseCard'; // Import the new SurpriseCard component

const CardContentSection = () => {
  const [showNote, setShowNote] = useState(false); // State to toggle the "Read Me" card
  const [showSurprise, setShowSurprise] = useState(false); // State to toggle the "Surprise" card

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {showSurprise ? (
        <SurpriseCard onClose={() => setShowSurprise(false)} /> // Render the SurpriseCard
      ) : (
        <Card
          sx={{
            width: '80%', // Take up 80% of the page width
            height: '70vh', // Take up 70% of the page height
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
          <FloatingHearts />
          <CardContent>
            {showNote ? (
              <>
                <Typography
                  variant="body1"
                  sx={{ color: '#6a1b9a', fontSize: '1.5rem', textAlign: 'center' }}
                >
                  Dear Mom, <br />
                  You know I am not the best at expressing how I feel but I will give it my best try. 
                  You are the most important person in my life even when I don't act like you are. 
                  You have gone above and beyond and are truly an amazing mother. I am proud of you 
                  for taking care of me as a single mother and you worked hard to be where you are now. 
                  It takes a special kind of strength that no man has and you should be proud of yourself. 
                  I love you and always will. Even though you're a turd sometimes. ;)
                </Typography>
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
                  onClick={() => setShowNote(false)} // Go back to the main card
                >
                  Back
                </Button>
              </>
            ) : (
              <>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{ color: '#d63384', fontWeight: 'bold' }}
                >
                  Happy Mother's Day!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#6a1b9a', fontSize: '1.5rem', textAlign: 'center' }}
                >
                  Thank you for everything you do. You are the best!
                </Typography>
              </>
            )}
          </CardContent>
          {!showNote && (
            <Box sx={{ display: 'flex', gap: 2, marginTop: '2rem' }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#d63384',
                    fontSize: '1.2rem',
                    padding: '0.8rem 2rem',
                    '&:hover': {
                      backgroundColor: '#ad1457',
                    },
                  }}
                  onClick={() => setShowNote(true)} // Show the "Read Me" card
                >
                  Read Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#6a1b9a',
                    fontSize: '1.2rem',
                    padding: '0.8rem 2rem',
                    '&:hover': {
                      backgroundColor: '#4a148c',
                    },
                  }}
                  onClick={() => setShowSurprise(true)} // Show the "Surprise" card
                >
                  Surprise
                </Button>
              </motion.div>
            </Box>
          )}
        </Card>
      )}
    </motion.div>
  );
};

export default CardContentSection;