
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isMFAVerified: boolean;
  login: (email: string, password: string) => boolean;
  verifyMFA: (code: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMFAVerified, setIsMFAVerified] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const mfa = localStorage.getItem('isMFAVerified');
    if (auth === 'true') setIsAuthenticated(true);
    if (mfa === 'true') setIsMFAVerified(true);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === 'test@test.com' && password === 'password') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const verifyMFA = (code: string): boolean => {
    if (code === '123456') {
      setIsMFAVerified(true);
      localStorage.setItem('isMFAVerified', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsMFAVerified(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isMFAVerified');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isMFAVerified, login, verifyMFA, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
