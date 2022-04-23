import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from 'shared/contexts';

import { useEffect } from 'react';
import { Dashboard, ListagemDePessoas } from 'pages';

export const AppRoutes = () => {
  const { setDrawerOptionsMenu } = useDrawerContext();

  useEffect(() => {
    setDrawerOptionsMenu([
      {
        path: '/pagina-inicial',
        icon: 'home',
        label: 'Página Inicial',
      },
      {
        path: '/pessoas',
        icon: 'people',
        label: 'Pessoas',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />
      <Route path='/pessoas' element={<ListagemDePessoas />} />
      <Route path='/pessoas/detalhe/:id' element={<p>Detalhe de pessoa</p>} />
      {/* <Route path='/cidades/detalhes/:id' element={<DetalhesCidade />} /> */}
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
