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
  useTheme,
} from '@mui/material';

export const MenuLateral = ({ children }: { children: JSX.Element }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer anchor='left' variant='permanent'>
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página Inicial' />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100%' marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
