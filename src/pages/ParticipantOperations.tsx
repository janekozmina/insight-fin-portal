
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const ParticipantOperations = () => {
  const { userRole } = useAuth();

  const transactions = [
    { id: 1, transactionId: 'TXN-2024-001', amount: 450000, status: 'Completed', time: '10 mins ago', type: 'Outbound' },
    { id: 2, transactionId: 'TXN-2024-002', amount: 425000, status: 'Failed', time: '25 mins ago', type: 'Inbound' },
    { id: 3, transactionId: 'TXN-2024-003', amount: 575000, status: 'Completed', time: '1 hour ago', type: 'Outbound' },
    { id: 4, transactionId: 'TXN-2024-004', amount: 600000, status: 'Pending', time: '2 hours ago', type: 'Inbound' },
  ];

  if (userRole === 'participant') {
    return (
      <Layout>
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-800">Participant Operations</h1>
            <a
              href="https://cbortgsdev1:8885/portal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="text-white"
                style={{ backgroundColor: '#0F172A' }}
              >
                Access Portal
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-[#1E3A8A] text-white">
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-stone-200">
                    <thead className="bg-stone-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                          Transaction ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-stone-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-stone-900">{transaction.transactionId}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-stone-900">{transaction.type}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-stone-900">{transaction.amount.toLocaleString()} AED</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              transaction.status === 'Failed' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-stone-900">{transaction.time}</div>
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
  }

  // CB user sees original layout
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Participant Operations</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Participant Access</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full" style={{ backgroundColor: '#B1A496' }}>Access Participants Portal</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ParticipantOperations;
