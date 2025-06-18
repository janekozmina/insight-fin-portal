
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ParticipantOperations = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Participant Operations</h1>
          <p className="text-slate-600 mt-2">Link to TMSX Solution Portal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Account Management</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">View Accounts</Button>
                <Button variant="outline" className="w-full">Balance Inquiry</Button>
                <Button variant="outline" className="w-full">Transaction History</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Payment Processing</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">Initiate Payment</Button>
                <Button variant="outline" className="w-full">Payment Status</Button>
                <Button variant="outline" className="w-full">Settlement Reports</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ParticipantOperations;
