
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CBOperations = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'AED' | 'USD'>('AED');
  const exchangeRate = 3.47; // USD to AED

  const connectedUsers = [
    { login: 'User1', username: 'User1 User1', logonTime: '19.06.2025 17:02:24', status: 'online' },
    { login: 'User2', username: 'User2 User2', logonTime: '19.06.2025 16:45:12', status: 'online' },
    { login: 'User3', username: 'User3 User3', logonTime: '19.06.2025 16:20:08', status: 'online' },
  ];

  const getTransactionAmount = (aedAmount: number) => {
    if (selectedCurrency === 'AED') {
      return `${aedAmount.toLocaleString()} AED`;
    } else {
      return `${(aedAmount / exchangeRate).toLocaleString('en-US', { maximumFractionDigits: 2 })} USD`;
    }
  };

  const transactionData = [
    { period: 'Today', aedAmount: 2500000 },
    { period: 'Yesterday', aedAmount: 3500000 },
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
                      className={`p-3 text-center text-sm font-medium ${
                        item.period === 'Today' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div>{item.period}</div>
                      <div className="text-xs mt-1">{getTransactionAmount(item.aedAmount)}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    <div className={`p-3 text-center text-sm font-medium flex items-center justify-center ${
                      selectedCurrency === 'AED' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      <span className="mr-2">AED</span>
                      <Switch 
                        checked={selectedCurrency === 'USD'} 
                        onCheckedChange={(checked) => setSelectedCurrency(checked ? 'USD' : 'AED')}
                      />
                      <span className="ml-2">USD</span>
                    </div>
                    <div className="bg-gray-100 p-3 text-center text-sm font-medium">
                      Rate: 1 USD = {exchangeRate} AED
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-lg font-medium">2 payments</p>
                      <p className="text-sm">{getTransactionAmount(6000000)}</p>
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
