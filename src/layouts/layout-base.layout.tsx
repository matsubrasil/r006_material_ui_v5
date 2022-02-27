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
  toolbar?: React.ReactNode;
  children?: React.ReactNode;
}

export const LayoutBase = ({ children, title, toolbar }: ILayoutBaseProps) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <Box
        sx={{
          padding: theme.spacing(1),
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          height: theme.spacing(smDown ? 6 : mdDown ? 8 : 12),
        }}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {title}
        </Typography>
      </Box>
      {toolbar && (
        /** */
        <Box>{toolbar}</Box>
      )}
      <Box sx={{ flex: 1, overflow: 'auto' }}>{children}</Box>
    </Box>
  );
};
