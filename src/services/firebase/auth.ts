import { auth } from './firebase';

// Sign In
export const doSignInWithEmailAndPassword = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => {
  console.log('wylogowanie');
  return auth.signOut();
};
