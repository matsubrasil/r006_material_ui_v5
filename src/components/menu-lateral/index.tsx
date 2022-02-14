import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from 'shared/contexts';

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink = ({ to, icon, label, onClick }: IListItemLinkProps) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const matchLinkRoute = useMatch({
    path: resolvedPath.pathname,
    end: false,
  });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!matchLinkRoute} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral = ({ children }: { children: JSX.Element }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >
          <Box
            sx={{
              width: '100%',
              height: theme.spacing(20),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              sx={{
                width: theme.spacing(12),
                height: theme.spacing(12),
                objectFit: 'contain',
              }}
              src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              {drawerOptions.map(({ path, icon, label }) => (
                <ListItemLink
                  key={path}
                  to={path}
                  icon={icon}
                  label={label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <ListItemButton onClick={toggleTheme}>
              <ListItemIcon>
                <Icon>dark_mode</Icon>
              </ListItemIcon>
              <ListItemText primary='Alternar tema' />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
      <Box height='100%' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
