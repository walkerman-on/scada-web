import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  path: string,
  element: JSX.Element;
  authOnly?: boolean;
};
