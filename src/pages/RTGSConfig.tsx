
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RTGSConfig = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">RTGS Configuration</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#B1A496] to-[#B1A496]/80 text-white">
              <CardTitle>System Configuration</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>RTGS Status:</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Processing Mode:</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Settlement Window:</span>
                  <span className="text-slate-600">09:00 - 17:00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#B1A496] to-[#B1A496]/80 text-white">
              <CardTitle>Database Operations</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full" style={{ backgroundColor: '#B1A496' }}>Access DBO Console</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RTGSConfig;
