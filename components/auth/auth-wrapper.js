import { useSelector } from 'react-redux';
import { routes } from '@/utils/routes';
import { selectUserState } from '@/store/user/userSlice';

const AuthWrapper = ({ children, router }) => {
  const user = useSelector(selectUserState);

  const logout = () => {
    localStorage.removeItem('persist:root');
    window.location = '/login';
  };

  if (!routes[router.pathname]) {
    router.push('/404');
    return;
  }

  if (
    routes[router.pathname].requireAuth &&
    routes[router.pathname].role.includes(user?.role)
  )
    return children;

  if (!routes[router.pathname].requireAuth) return children;

  if (
    routes[router.pathname].requireAuth &&
    !routes[router.pathname].role.includes(user?.role)
  )
    logout();
};

export default AuthWrapper;
