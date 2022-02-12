import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Icon,
  useMediaQuery,
  Theme,
} from '@mui/material';
import { useDrawerContext } from 'shared/contexts';

interface ILayoutBaseProps {
  title?: string;
  children?: React.ReactNode;
}

export const LayoutBase = ({ children, title }: ILayoutBaseProps) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <Box
        sx={{
          padding: theme.spacing(1),
          height: theme.spacing(12),
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant='h5'>{title}</Typography>
      </Box>
      <Box>Barra de Ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
