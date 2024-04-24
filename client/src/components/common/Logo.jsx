import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography variant="h5" fontWeight="bold" fontSize="1.9rem">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ color: theme.palette.primary.main }}>BingeBox</span>
      </Link>
    </Typography>
  );
};

export default Logo;
