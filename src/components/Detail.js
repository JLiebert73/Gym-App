import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

// File paths for image assets
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  // Destructuring exerciseDetail object
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  // Array of extra details with icons and names
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  // Rendering component
  return (
    <Stack gap="40px" sx={{ flexDirection: { lg: 'row' }, padding: '20px', alignItems: 'center' }}>
      {/* Displaying exercise GIF image */}
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '25px', xs: '15px' } }}>
        {/* Displaying exercise name */}
        <Typography sx={{ fontSize: { lg: '48px', xs: '28px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        {/* Displaying exercise description */}
        <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best exercises to target your {target}. It will help you improve your{' '}
          mood and gain energy.
        </Typography>
        {/* Displaying additional details with icons */}
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="16px" alignItems="center">
            {/* Button with icon */}
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '80px', height: '80px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '40px' }} />
            </Button>
            {/* Displaying extra detail name */}
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '24px', xs: '18px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
