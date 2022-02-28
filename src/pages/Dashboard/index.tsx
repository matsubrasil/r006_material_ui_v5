import React from 'react';
import { LayoutBase } from 'layouts';
// import FerramentasDaListagem from 'components/ferramentas-listagem';
import FerramentasDeDetalhes from 'components/ferramentas-detalhe';

export const Dashboard = () => {
  return (
    <LayoutBase
      title='Dashboard'
      toolbar={
        <FerramentasDeDetalhes
          mostrarBotaoSalvarEFechar
          mostrarBotaoSalvarEFecharCarregando
        />
      }
    >
      Dashboard
    </LayoutBase>
  );
};
