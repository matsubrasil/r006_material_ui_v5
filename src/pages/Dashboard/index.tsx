import React from 'react';
import { LayoutBase } from 'layouts';
import BarraFerramentas from 'components/barra-ferramentas';

export const Dashboard = () => {
  return (
    <LayoutBase
      title='Dashboard'
      toolbar={
        <BarraFerramentas mostrarInputBusca textoBotaoNovo='Adicionar' />
      }
    >
      Dashboard
    </LayoutBase>
  );
};
