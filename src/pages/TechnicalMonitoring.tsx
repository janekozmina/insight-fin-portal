
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
      <div className="p-6 bg-gray-900 min-h-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">Technical Monitoring</h1>
        </div>

        {/* Grafana-style Header */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold">System Performance Dashboard</h2>
            <div className="flex space-x-2">
              <select className="bg-gray-700 text-white px-3 py-1 rounded text-sm">
                <option>Last 1 hour</option>
                <option>Last 6 hours</option>
                <option>Last 24 hours</option>
              </select>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Refresh</button>
            </div>
          </div>
        </div>

        {/* Main Chart Panel */}
        <div className="bg-gray-800 rounded-lg mb-6">
          <div className="bg-gray-700 px-4 py-2 rounded-t-lg">
            <h3 className="text-white font-medium">System Performance Metrics</h3>
          </div>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '4px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Line type="monotone" dataKey="cpu" stroke="#EF4444" name="CPU %" strokeWidth={2} />
                  <Line type="monotone" dataKey="memory" stroke="#10B981" name="Memory %" strokeWidth={2} />
                  <Line type="monotone" dataKey="network" stroke="#3B82F6" name="Network %" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-lg">
            <div className="bg-gray-700 px-4 py-2 rounded-t-lg">
              <h4 className="text-white text-sm font-medium">CPU Usage</h4>
            </div>
            <div className="p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">67%</div>
                <div className="text-xs text-gray-400">Current</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg">
            <div className="bg-gray-700 px-4 py-2 rounded-t-lg">
              <h4 className="text-white text-sm font-medium">Memory Usage</h4>
            </div>
            <div className="p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">71%</div>
                <div className="text-xs text-gray-400">Current</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg">
            <div className="bg-gray-700 px-4 py-2 rounded-t-lg">
              <h4 className="text-white text-sm font-medium">Network I/O</h4>
            </div>
            <div className="p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">79%</div>
                <div className="text-xs text-gray-400">Current</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg">
            <div className="bg-gray-700 px-4 py-2 rounded-t-lg">
              <h4 className="text-white text-sm font-medium">Uptime</h4>
            </div>
            <div className="p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                <div className="text-xs text-gray-400">30 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalMonitoring;
