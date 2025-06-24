
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleAccessOnboardingPortal = () => {
    window.open('http://ddw.k8s1.cma.se/', '_blank');
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Onboarding</h1>
          <Button 
            className="text-white"
            style={{ backgroundColor: '#0F172A' }}
            onClick={handleAccessOnboardingPortal}
          >
            Access Onboarding Portal
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-stone-200 text-stone-800">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-stone-50 p-3 rounded">
                  <span className="text-sm font-medium">API Tests</span>
                  <span className="text-xs bg-stone-300 px-2 py-1 rounded">Active</span>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-xs font-medium text-stone-600 border-b pb-2">
                    <span>API</span>
                    <span>Status</span>
                    <span>Time</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>GET /accounts/balance</span>
                    <span className="text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Successful
                    </span>
                    <span className="text-stone-600">10 mins ago</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>POST /payments/transfer</span>
                    <span className="text-red-600 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      Failed
                    </span>
                    <span className="text-stone-600">25 mins ago</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>GET /transactions/history</span>
                    <span className="text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Successful
                    </span>
                    <span className="text-stone-600">1 hour ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-stone-200 text-stone-800">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start text-white h-12"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  <span className="mr-2">↗</span>
                  Run Outbound Transfer
                </Button>
                
                <Button 
                  className="w-full justify-start text-white h-12"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  <span className="mr-2">↙</span>
                  Simulate Inbound Transfer
                </Button>
                
                <Button 
                  className="w-full justify-start text-white h-12"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  <span className="mr-2">📄</span>
                  View API Reference
                </Button>
                
                <Button 
                  className="w-full justify-start h-12"
                  style={{ backgroundColor: '#E5E7EB', color: '#374151' }}
                >
                  <span className="mr-2">⚙</span>
                  Start Certification
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Onboarding;
