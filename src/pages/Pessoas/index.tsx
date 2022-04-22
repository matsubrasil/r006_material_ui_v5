import { LayoutBase } from 'layouts';
import FerramentasDaListagem from 'components/ferramentas-listagem';
import { Typography } from '@mui/material';

export const CidadesPage = () => {
  return (
    <LayoutBase
      title='Cidades'
      toolbar={
        <FerramentasDaListagem mostrarInputBusca textoBotaoNovo='Adicionar' />
      }
    >
      <Typography variant='subtitle2'>Cidades</Typography>
    </LayoutBase>
  );
};
