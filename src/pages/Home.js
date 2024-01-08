import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      {/* Hero Banner Component */}
      <HeroBanner />

      {/* Exercises Component */}
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />

      {/* About Button */}
      <Button
        component={Link}
        to="/about"
        variant="contained"
        color="primary"
        sx={{ marginTop: '20px', marginLeft: '20px' }}
      >
        About
      </Button>
    </Box>
  );
};

export default Home;
