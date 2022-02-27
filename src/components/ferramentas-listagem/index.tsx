import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

const FerramentasDaListagem = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDaBusca,

  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}: IFerramentasDaListagemProps) => {
  const theme = useTheme();
  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      gap={1}
    >
      {mostrarInputBusca && (
        <TextField
          size='small'
          placeholder='Pesquisar...'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
        />
      )}
      {mostrarBotaoNovo && (
        <Box flex={1} display='flex' justifyContent='end'>
          <Button
            variant='contained'
            color='primary'
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FerramentasDaListagem;
