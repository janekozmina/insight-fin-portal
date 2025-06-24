
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParticipantDashboard = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Participant Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transaction Overview */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Transaction Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">💳</div>
                  <p className="text-lg font-medium">Transaction Dashboard</p>
                  <p className="text-sm">Your transaction analytics</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Balance */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Account Balance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">💰</div>
                  <p className="text-lg font-medium">Balance Overview</p>
                  <p className="text-sm">Current account status</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="text-lg font-medium">Activity Log</p>
                  <p className="text-sm">Recent transaction history</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">System Status</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🟢</div>
                  <p className="text-lg font-medium">System Health</p>
                  <p className="text-sm">All systems operational</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ParticipantDashboard;
