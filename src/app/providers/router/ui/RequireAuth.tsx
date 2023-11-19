import { useAuth } from 'entities/Auth/hooks/useAuth';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps): JSX.Element {
    const { isAuth} = useAuth()

    if (isAuth) {
        return children;
    }

    return null;
}
