
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CBOperations = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Central Bank Operations</h1>
          <p className="text-slate-600 mt-2">Link to CB UAE Operations Portal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Monetary Policy</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">Interest Rate Management</Button>
                <Button variant="outline" className="w-full">Reserve Requirements</Button>
                <Button variant="outline" className="w-full">Open Market Operations</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Regulatory Oversight</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">Compliance Monitoring</Button>
                <Button variant="outline" className="w-full">Risk Assessment</Button>
                <Button variant="outline" className="w-full">Regulatory Reports</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CBOperations;
