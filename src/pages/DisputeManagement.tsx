
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';

const DisputeManagement = () => {
  const { userRole } = useAuth();

  const disputes = [
    { id: 1, caseId: 'DISP-2024-001', raisedBy: 'Participant A', against: 'Participant B', amount: 5000, status: 'Open', raisedDate: '2024-01-10' },
    { id: 2, caseId: 'DISP-2024-002', raisedBy: 'Participant C', against: 'Participant A', amount: 2500, status: 'In Review', raisedDate: '2024-01-12' },
    { id: 3, caseId: 'DISP-2024-003', raisedBy: 'Participant B', against: 'Participant C', amount: 10000, status: 'Resolved', raisedDate: '2024-01-15' },
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

        {/* Top Section - Summary KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Open Disputes */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Total Open Disputes</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">126</div>
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

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">% Resolved Within SLA</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">87%</div>
              <div className="text-sm text-green-600">within target</div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Dispute Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Disputes by Participant */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Disputes by Participant</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-lg font-medium">Bar Chart</p>
                  <p className="text-sm">Disputes filed against and by each participant</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disputes by Type */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Disputes by Type</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🥧</div>
                  <p className="text-lg font-medium">Pie Chart</p>
                  <p className="text-sm">Unauthorized, Technical, Amount Mismatch, etc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Active Disputes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Case ID
                      </th>
                      {userRole === 'cb' && (
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                          Raised By
                        </th>
                      )}
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Against
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Raised Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-stone-200">
                    {disputes.map((dispute) => (
                      <tr key={dispute.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-stone-900">{dispute.caseId}</div>
                        </td>
                        {userRole === 'cb' && (
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-stone-900">{dispute.raisedBy}</div>
                          </td>
                        )}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-stone-900">{dispute.against}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-stone-900">${dispute.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant="secondary">{dispute.status}</Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-stone-900">{dispute.raisedDate}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DisputeManagement;
