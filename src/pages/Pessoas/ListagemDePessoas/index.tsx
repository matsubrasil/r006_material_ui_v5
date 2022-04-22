import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';

import { LayoutBase } from 'layouts';
import { useDebounce } from 'shared/hooks';
import { IListagemPessoa, PessoasService } from 'services/api';
import FerramentasDaListagem from 'components/ferramentas-listagem';
import { Environment } from 'shared/environments';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      PessoasService.getAll(1, busca).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        }
        setTotalCount(result.totalCount);
        setRows(result.data);
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
      <TableContainer
        component={Paper}
        variant='outlined'
        sx={{ m: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell></TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* Se o count=0  e isLoading = false, então, mostre a mensagem */}
          {!totalCount && !isLoading && (
            <caption>{Environment.LISTAGEM_VAZIA}</caption>
          )}

          {isLoading && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress variant='indeterminate' />
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
    </LayoutBase>
  );
};
