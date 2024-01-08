import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// File path for the exercise card styles
import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    {/* Displaying exercise GIF image */}
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row" sx={{ marginTop: '11px' }}>
      {/* Button for body part */}
      <Button className="card-button" sx={{ background: '#FFA9A9' }}>
        {exercise.bodyPart}
      </Button>
      {/* Button for target */}
      <Button className="card-button" sx={{ background: '#FCC757' }}>
        {exercise.target}
      </Button>
    </Stack>
    {/* Displaying exercise name */}
    <Typography sx={{ fontSize: { lg: '24px', xs: '20px' }, fontWeight: 'bold', marginTop: '11px', paddingBottom: '10px', textTransform: 'capitalize' }}>
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
