import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectCurrentUser, selectIsAuth } from 'slices/authSlice';
import { firebase } from 'services/firebase';

const useAuthUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const setUser = (user: any) => {
      if (user) {
        dispatch(login({ uid: user.uid, email: user.email }));
      } else {
        dispatch(logout());
      }
    };

    const unsubscribe = firebase.auth.onAuthStateChanged(setUser);

    return () => unsubscribe();
  }, [dispatch]);

  return { currentUser, isAuth };
};

export default useAuthUser;
