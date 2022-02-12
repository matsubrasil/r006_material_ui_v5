import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from 'shared/contexts';
import { PaginaInicialPage, CidadesPage } from 'pages';
import { useEffect } from 'react';

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
        icon: 'star',
        label: 'Cidades',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<PaginaInicialPage />} />
      <Route path='/cidades' element={<CidadesPage />} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
