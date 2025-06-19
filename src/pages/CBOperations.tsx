
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

        <div className="grid grid-cols-1 gap-6">
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
        </div>
      </div>
    </Layout>
  );
};

export default CBOperations;
