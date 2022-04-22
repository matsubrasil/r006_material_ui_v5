import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from 'shared/hooks';
import { PessoasService } from 'services/api';

import { LayoutBase } from 'layouts';
import FerramentasDaListagem from 'components/ferramentas-listagem';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const isError = (err: unknown): err is Error => err instanceof Error;
  const { debounce } = useDebounce(3000, false);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PessoasService.getAll(1, busca).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        }
        console.log(result);
      });
    });
  }, [busca]);

  return (
    <LayoutBase
      title='Listagem de pessoas'
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
      ListagemDePessoas
    </LayoutBase>
  );
};
