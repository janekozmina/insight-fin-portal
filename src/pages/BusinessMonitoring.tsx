
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BusinessMonitoring = () => {
  const businessData = [
    { name: 'Jan', revenue: 4000, transactions: 2400 },
    { name: 'Feb', revenue: 3000, transactions: 1398 },
    { name: 'Mar', revenue: 2000, transactions: 9800 },
    { name: 'Apr', revenue: 2780, transactions: 3908 },
    { name: 'May', revenue: 1890, transactions: 4800 },
    { name: 'Jun', revenue: 2390, transactions: 3800 },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Business Monitoring</h1>
          <p className="text-slate-600 mt-2">Entry point to detailed Tableau dashboards per participant</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Business Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={businessData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#0ea5e9" name="Revenue ($000)" />
                    <Bar dataKey="transactions" fill="#64748b" name="Transactions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-green-700 text-white">
                <CardTitle>Participant A</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">$2.4M</div>
                  <div className="text-slate-600">Monthly Volume</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle>Participant B</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">$1.8M</div>
                  <div className="text-slate-600">Monthly Volume</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-purple-700 text-white">
                <CardTitle>Participant C</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">$3.1M</div>
                  <div className="text-slate-600">Monthly Volume</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMonitoring;
