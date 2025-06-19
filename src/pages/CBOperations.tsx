
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CBOperations = () => {
  const connectedUsers = [
    { login: 'User1', username: 'User1 User1', logonTime: '19.06.2025 17:02:24', status: 'online' },
    { login: 'User2', username: 'User2 User2', logonTime: '19.06.2025 16:45:12', status: 'online' },
    { login: 'User3', username: 'User3 User3', logonTime: '19.06.2025 16:20:08', status: 'online' },
  ];

  const transactionData = [
    { period: 'Today', count: 45, amount: '1,250.50 OMR' },
    { period: 'Yesterday', count: 38, amount: '980.25 OMR' },
    { period: 'This month', count: 1205, amount: '45,670.80 OMR' },
    { period: 'Last month', count: 1089, amount: '38,920.15 OMR' },
    { period: 'This year', count: 12450, amount: '520,340.90 OMR' },
    { period: 'Last year', count: 11230, amount: '445,120.60 OMR' },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Central Bank Operations</h1>
          <Button 
            className="bg-[#B1A496] hover:bg-[#B1A496]/90 text-white"
          >
            Access Portal
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Business Day Chart Panel 1 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Business Day Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Business Day Chart</p>
                  <p className="text-sm">RPG Timeline visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connected Users */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Connected Users</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Login</TableHead>
                    <TableHead>User name</TableHead>
                    <TableHead>Logon time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {connectedUsers.map((user, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {user.login}
                      </TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell className="font-mono text-sm">{user.logonTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Business Day Chart Panel 2 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Settlement Operations</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Settlement Chart</p>
                  <p className="text-sm">Real-time settlement data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transactions by Transaction Types */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Transactions by Transaction Types</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  {transactionData.map((item, index) => (
                    <div 
                      key={index} 
                      className={`p-2 text-center text-sm ${
                        item.period === 'Today' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {item.period}
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-200 p-2 text-center text-sm">BHD</div>
                    <div className="bg-blue-600 text-white p-2 text-center text-sm">OMR</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-lg font-medium">5 payments</p>
                      <p className="text-sm">360.94 OMR</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CBOperations;
