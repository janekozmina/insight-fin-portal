
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isMFAVerified: boolean;
  userRole: 'cb' | 'participant' | null;
  login: (email: string, password: string) => boolean;
  verifyMFA: (code: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMFAVerified, setIsMFAVerified] = useState(false);
  const [userRole, setUserRole] = useState<'cb' | 'participant' | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const mfa = localStorage.getItem('isMFAVerified');
    const role = localStorage.getItem('userRole') as 'cb' | 'participant' | null;
    if (auth === 'true') setIsAuthenticated(true);
    if (mfa === 'true') setIsMFAVerified(true);
    if (role) setUserRole(role);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === 'test@test.com' && password === 'CMA!@#$') {
      setIsAuthenticated(true);
      setUserRole('cb');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'cb');
      return true;
    }
    if (email === 'participant@participant.com' && password === 'CMA!@#$') {
      setIsAuthenticated(true);
      setUserRole('participant');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'participant');
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
    setUserRole(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isMFAVerified');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isMFAVerified, userRole, login, verifyMFA, logout }}>
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
