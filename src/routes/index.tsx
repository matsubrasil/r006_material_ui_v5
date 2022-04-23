import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// components
import { Dashboard, DetalheDePessoas, ListagemDePessoas } from 'pages';

// shared
import { useDrawerContext } from 'shared/contexts';

// main
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
      <Route path='/pessoas/detalhe/:id' element={<DetalheDePessoas />} />
      {/* <Route path='/cidades/detalhes/:id' element={<DetalhesCidade />} /> */}
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
