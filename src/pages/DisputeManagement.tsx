
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DisputeManagement = () => {
  const disputes = [
    { id: 'DSP-001', amount: '$12,500', participant: 'Bank A', status: 'Open', date: '2024-01-15', type: 'Payment Error' },
    { id: 'DSP-002', amount: '$5,200', participant: 'Bank B', status: 'In Progress', date: '2024-01-14', type: 'Settlement Delay' },
    { id: 'DSP-003', amount: '$8,750', participant: 'Bank C', status: 'Resolved', date: '2024-01-13', type: 'Duplicate Transaction' },
    { id: 'DSP-004', amount: '$3,400', participant: 'Bank D', status: 'Closed', date: '2024-01-12', type: 'Technical Issue' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">Dispute Management</h1>
            <p className="text-slate-600 mt-2">Access to dispute lists and creation</p>
          </div>
          <Button className="bg-blue-900 hover:bg-blue-800">
            Create New Dispute
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-red-600 text-white">
              <CardTitle className="text-sm">Open Disputes</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1</div>
                <div className="text-xs text-slate-600">Active</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-yellow-600 text-white">
              <CardTitle className="text-sm">In Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">1</div>
                <div className="text-xs text-slate-600">Processing</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="text-sm">Resolved</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1</div>
                <div className="text-xs text-slate-600">This Month</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-gray-600 text-white">
              <CardTitle className="text-sm">Total Value</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">$29.9K</div>
                <div className="text-xs text-slate-600">Under Dispute</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-blue-900 text-white">
            <CardTitle>Dispute List</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {disputes.map((dispute) => (
                <div key={dispute.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1 grid grid-cols-5 gap-4">
                    <div>
                      <p className="font-medium text-slate-900">{dispute.id}</p>
                      <p className="text-sm text-slate-600">{dispute.date}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{dispute.participant}</p>
                      <p className="text-sm text-slate-600">{dispute.type}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{dispute.amount}</p>
                      <p className="text-sm text-slate-600">Disputed Amount</p>
                    </div>
                    <div>
                      <Badge className={getStatusColor(dispute.status)}>
                        {dispute.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DisputeManagement;
