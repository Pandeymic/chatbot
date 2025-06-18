import { useState, useEffect } from 'react';

const TOKEN_KEY = 'auth_token';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem(TOKEN_KEY));
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (email: string, password: string): boolean => {
    if (email === 'test@example.com' && password === 'password') {
      const fakeToken = '1234567890';
      localStorage.setItem(TOKEN_KEY, fakeToken);
      setToken(fakeToken);
      setCurrentUser(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setCurrentUser(null);
  };

  const isAuthenticated = !!token;

  useEffect(() => {
    if (token && !currentUser) {
      setCurrentUser('test@example.com');
    }
  }, [token]);

  return { login, logout, isAuthenticated, currentUser };
};
