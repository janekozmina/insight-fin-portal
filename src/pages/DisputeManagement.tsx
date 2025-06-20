
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DisputeManagement = () => {
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
          <Button 
            className="text-white"
            style={{ backgroundColor: '#0F172A' }}
          >
            Access Dispute Portal
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle>Active Disputes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Case ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                        Raised By
                      </th>
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
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-stone-900">{dispute.raisedBy}</div>
                        </td>
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
