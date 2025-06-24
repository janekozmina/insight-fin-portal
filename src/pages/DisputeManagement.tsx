
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/contexts/AuthContext';

const DisputeManagement = () => {
  const { userRole } = useAuth();

  // Sample data for disputes by type
  const disputeTypeData = [
    { name: 'Unauthorized Transaction', value: 35, color: '#1E3A8A' },
    { name: 'Technical Failure', value: 28, color: '#3B82F6' },
    { name: 'Amount Mismatch', value: 20, color: '#60A5FA' },
    { name: 'Duplicate Transaction', value: 12, color: '#93C5FD' },
    { name: 'Others', value: 5, color: '#DBEAFE' },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Dispute Management</h1>
          <a
            href="https://nbm-ips-acc1:8918/portal/view/monitoring/disputesMonitoringList.xhtml"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button 
            className="text-white"
            style={{ backgroundColor: '#0F172A' }}
          >
            Access Dispute Portal
          </Button>
          </a>
        </div>

        {/* Top Section - Summary KPIs - Full width for participants */}
        <div className={`grid ${userRole === 'participant' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-3'} gap-6 mb-8`}>
          {/* Total Open Disputes */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Total Open Disputes</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">{userRole === 'participant' ? '3' : '126'}</div>
              <div className="text-sm text-stone-600">active cases</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">2.4 days</div>
              <div className="text-sm text-stone-600">average time</div>
            </CardContent>
          </Card>

          {/* Only show SLA card for CB users */}
          {userRole !== 'participant' && (
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-[#1E3A8A] text-white pb-3">
                <CardTitle className="text-sm font-medium">% Resolved Within SLA</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-stone-800">87%</div>
                <div className="text-sm text-green-600">within target</div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Bottom Section - Disputes by Type Chart */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Disputes by Type</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={disputeTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {disputeTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-2 border rounded shadow">
                              <p className="font-medium">{data.name}</p>
                              <p className="text-sm">Count: {data.value}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DisputeManagement;
