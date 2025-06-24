
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import CBDashboard from './CBDashboard';
import ParticipantDashboard from './ParticipantDashboard';

const Dashboard = () => {
  const { userRole } = useAuth();

  if (userRole === 'cb') {
    return <CBDashboard />;
  } else if (userRole === 'participant') {
    return <ParticipantDashboard />;
  }

  // Fallback (shouldn't happen with proper authentication)
  return <CBDashboard />;
};

export default Dashboard;
