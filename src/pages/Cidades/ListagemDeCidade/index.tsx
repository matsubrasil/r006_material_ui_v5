import FerramentasDaListagem from 'components/ferramentas-listagem';
import { LayoutBase } from 'layouts';
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBase
      title='Listagem de cidades'
      toolbar={
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo='Nova'
          textoDaBusca={busca}
          aoMudarTextoDaBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      ListagemDeCidade
    </LayoutBase>
  );
};
