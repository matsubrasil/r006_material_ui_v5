import React from 'react';
import { LayoutBase } from 'layouts';
import FerramentasDaListagem from 'components/ferramentas-listagem';

export const Dashboard = () => {
  return (
    <LayoutBase
      title='Dashboard'
      toolbar={
        <FerramentasDaListagem mostrarInputBusca textoBotaoNovo='Adicionar' />
      }
    >
      Dashboard
    </LayoutBase>
  );
};
