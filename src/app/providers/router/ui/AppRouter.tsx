import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { AppRoutesProps } from '../routeConfig/types';

const AppRouter = (config: Record<any, AppRoutesProps>) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(config).map(({ element, path, authOnly }) => (
          <Route
            key={path}
            path={path}
            element={
              authOnly ? (
                // TODO: разобраться с типами ReactNode и JSX.Element
                <RequireAuth>{element as JSX.Element}</RequireAuth>
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
