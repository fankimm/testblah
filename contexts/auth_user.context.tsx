import { createContext, ReactNode, useContext } from 'react';
import { InAuthUser } from '@/models/in_auth_user';
import useFirebaseAuth from '@/hooks/user_firebase_auth';

interface InAuthUserContext {
  loading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
  authUser: InAuthUser | null;
}

const AuthUserContext = createContext<InAuthUserContext>({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => ({ user: null, credential: null }),
  signOut: () => {
    console.info('logout');
  },
});

export const AuthUserProvider = function ({ children }: { children: ReactNode }) {
  const auth = useFirebaseAuth();
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
};

export const useAuth = () => useContext(AuthUserContext);
