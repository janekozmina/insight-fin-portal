
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TechnicalMonitoring = () => {
  const performanceData = [
    { time: '00:00', cpu: 45, memory: 62, network: 78 },
    { time: '04:00', cpu: 38, memory: 58, network: 82 },
    { time: '08:00', cpu: 72, memory: 85, network: 91 },
    { time: '12:00', cpu: 86, memory: 78, network: 88 },
    { time: '16:00', cpu: 91, memory: 82, network: 85 },
    { time: '20:00', cpu: 67, memory: 71, network: 79 },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Technical Monitoring</h1>
          <p className="text-slate-600 mt-2">Emulation for Grafana to track key technical metrics</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>System Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpu" stroke="#ef4444" name="CPU %" strokeWidth={2} />
                    <Line type="monotone" dataKey="memory" stroke="#22c55e" name="Memory %" strokeWidth={2} />
                    <Line type="monotone" dataKey="network" stroke="#3b82f6" name="Network %" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="text-sm">CPU Usage</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">67%</div>
                  <div className="text-xs text-slate-600">Current</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-sm">Memory Usage</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">71%</div>
                  <div className="text-xs text-slate-600">Current</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-sm">Network I/O</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">79%</div>
                  <div className="text-xs text-slate-600">Current</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-yellow-600 text-white">
                <CardTitle className="text-sm">Uptime</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">99.9%</div>
                  <div className="text-xs text-slate-600">30 days</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalMonitoring;
