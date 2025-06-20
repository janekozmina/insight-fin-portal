import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import Chatbot from '@/components/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { logout, userRole } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const allMenuItems = [
    { name: 'Home', path: '/', roles: ['cb', 'participant'] },
    { name: 'RTGS Configuration', path: '/rtgs-config', roles: ['cb'] },
    { name: 'RTGS Financial Monitoring', path: '/rtgs-monitoring', roles: ['cb'] },
    { name: 'Central Bank Operations', path: '/cb-operations', roles: ['cb'] },
    { name: 'Participants Operation', path: '/participant-operations', roles: ['participant'] },
    { name: 'Business Monitoring', path: '/business-monitoring', roles: ['cb', 'participant'] },
    { name: 'Technical Monitoring', path: '/technical-monitoring', roles: ['cb'] },
    { name: 'Anomaly Detection', path: '/anomaly-detection', roles: ['cb'] },
    { name: 'Dispute Management', path: '/dispute-management', roles: ['cb', 'participant'] },
    { name: 'Knowledge Hub', path: '/knowledge-hub', roles: ['cb', 'participant'] },
    { name: 'Onboarding', path: '/onboarding', roles: ['participant'] },
  ];

  const menuItems = allMenuItems.filter(item => 
    userRole && item.roles.includes(userRole)
  );

  const getUserDisplayInfo = () => {
    if (userRole === 'cb') {
      return { name: 'CB User', initials: 'CB' };
    } else if (userRole === 'participant') {
      return { name: 'Participant User', initials: 'PU' };
    }
    return { name: 'User', initials: 'U' };
  };

  const userInfo = getUserDisplayInfo();

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 flex flex-col bg-slate-900`}>
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-lg font-bold text-white">Unified Portal CMA</h1>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-slate-800 p-1"
            >
              {sidebarOpen ? '←' : '→'}
            </Button>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {sidebarOpen && <span className="text-sm">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-slate-700">
          <Button
            onClick={logout}
            variant="ghost"
            className={`${sidebarOpen ? 'w-full' : 'w-8'} text-slate-300 hover:bg-slate-800 hover:text-white`}
          >
            {sidebarOpen ? 'Logout' : '🚪'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-stone-800">
              {menuItems.find(item => item.path === location.pathname)?.name || 'Home'}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-stone-600">Welcome, {userInfo.name}</span>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1E3A8A' }}>
                <span className="text-white text-sm font-bold">{userInfo.initials}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Layout;
