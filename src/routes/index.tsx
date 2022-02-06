import { PaginaInicialPage } from 'pages/pagina-inicial.page';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/pagina-inicial' element={<PaginaInicialPage />} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
