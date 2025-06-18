
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import Chatbot from '@/components/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'RTGS Configuration', path: '/rtgs-config' },
    { name: 'RTGS Financial Monitoring', path: '/rtgs-monitoring' },
    { name: 'Central Bank Operations', path: '/cb-operations' },
    { name: 'Participants Operation', path: '/participant-operations' },
    { name: 'Business Monitoring', path: '/business-monitoring' },
    { name: 'Technical Monitoring', path: '/technical-monitoring' },
    { name: 'Anomaly Detection', path: '/anomaly-detection' },
    { name: 'Dispute Management', path: '/dispute-management' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-stone-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-stone-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-lg font-bold text-amber-100">Participants Portal</h1>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-stone-700 p-1"
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
                      ? 'bg-amber-700 text-white'
                      : 'text-stone-200 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  {sidebarOpen && <span className="text-sm">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-stone-700">
          <Button
            onClick={logout}
            variant="ghost"
            className={`${sidebarOpen ? 'w-full' : 'w-8'} text-stone-200 hover:bg-stone-700 hover:text-white`}
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
              {menuItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-stone-600">Welcome, Financial User</span>
              <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">FU</span>
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
