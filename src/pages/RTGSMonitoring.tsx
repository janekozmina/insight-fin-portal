import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RTGSMonitoring = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">RTGS Financial Monitoring</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">1,247</div>
                <div className="text-slate-600">Active Transactions</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-green-700 text-white">
              <CardTitle>Settlement Status</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">98.7%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle>System Load</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">67%</div>
                <div className="text-slate-600">Current Load</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RTGSMonitoring;
