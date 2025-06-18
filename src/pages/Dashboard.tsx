import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Mock data for liquidity management
  const liquidityData = [
    { name: 'Mon', balance: 4000, required: 3000 },
    { name: 'Tue', balance: 3000, required: 3200 },
    { name: 'Wed', balance: 2000, required: 2800 },
    { name: 'Thu', balance: 2780, required: 3100 },
    { name: 'Fri', balance: 1890, required: 2900 },
  ];

  // Mock data for queue management
  const queueData = [
    { time: '09:00', pending: 12, processed: 45 },
    { time: '10:00', pending: 8, processed: 52 },
    { time: '11:00', pending: 15, processed: 38 },
    { time: '12:00', pending: 6, processed: 61 },
    { time: '13:00', pending: 9, processed: 48 },
  ];

  // Mock data for transactions overview
  const transactionData = [
    { name: 'High Value', value: 45, color: '#0ea5e9' },
    { name: 'Regular', value: 35, color: '#3b82f6' },
    { name: 'Urgent', value: 20, color: '#1e40af' },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Liquidity Management Dashboard */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <CardTitle className="text-lg">Liquidity Management</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={liquidityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="balance" fill="#0ea5e9" name="Available Balance" />
                    <Bar dataKey="required" fill="#64748b" name="Required Reserve" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">$2.4M</div>
                  <div className="text-slate-600">Current Balance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600">$3.1M</div>
                  <div className="text-slate-600">Required Reserve</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Queue Management Dashboard */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <CardTitle className="text-lg">Queue Management</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={queueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pending" stroke="#ef4444" name="Pending" strokeWidth={3} />
                    <Line type="monotone" dataKey="processed" stroke="#22c55e" name="Processed" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">9</div>
                  <div className="text-slate-600">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">248</div>
                  <div className="text-slate-600">Processed Today</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Overview Dashboard */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <CardTitle className="text-lg">Transactions Overview</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={transactionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                    >
                      {transactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {transactionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-slate-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">1,247</div>
                <div className="text-sm text-blue-700">Total Transactions</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-900">$45.2M</div>
                <div className="text-sm text-green-700">Total Volume</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-900">99.8%</div>
                <div className="text-sm text-yellow-700">Success Rate</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-900">12ms</div>
                <div className="text-sm text-purple-700">Avg Response</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
