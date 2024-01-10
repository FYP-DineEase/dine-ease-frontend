import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUserState } from '@/store/user/userSlice';

const withAuth = (WrappedComponent, options = {}) => {
  const AuthGuard = (props) => {
    const { roles = [null], redirect = '/' } = options;
    const router = useRouter();
    const user = useSelector(selectUserState);

    const checkAuth = useCallback(() => {
      if (!roles.includes(user.role)) {
        router.push(redirect);
      }
    }, [router, user.role, roles, redirect]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    const getLayout = WrappedComponent.getLayout || ((page) => page);
    return roles.includes(user.role) ? getLayout(<WrappedComponent {...props} />) : null;
  };

  return AuthGuard;
};

export default withAuth;
