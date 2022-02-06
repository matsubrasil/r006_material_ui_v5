import { Button } from '@mui/material';
import { useAppThemeContext } from 'shared/contexts';

export const PaginaInicialPage = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Button variant='contained' color='primary' onClick={toggleTheme}>
      Teste
    </Button>
  );
};
