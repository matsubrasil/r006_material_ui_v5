import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from 'shared/contexts';

import { useEffect } from 'react';
import { Dashboard, ListagemDeCidade } from 'pages';

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
        path: '/cidades',
        icon: 'location_city',
        label: 'Cidades',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />
      <Route path='/cidades' element={<ListagemDeCidade />} />
      {/* <Route path='/cidades/detalhes/:id' element={<DetalhesCidade />} /> */}
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
