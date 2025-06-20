
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RTGSConfig = () => {
  const configItems = [
    { setting: 'RTGS Status', value: 'Active', type: 'status' },
    { setting: 'Processing Mode', value: 'Real-time', type: 'mode' },
    { setting: 'Settlement Window', value: '09:00 - 17:00', type: 'text' },
    { setting: 'Cut-off for Customer Payments', value: '16:30', type: 'text' },
    { setting: 'Cut-off for Interbank Payments', value: '17:00', type: 'text' },
    { setting: 'End-of-Day Processing', value: '17:00 - 17:30', type: 'text' },
    { setting: 'System Backup Schedule', value: '18:00 onwards', type: 'text' },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">RTGS Configuration</h1>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Access RTGS Configuration
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-[#1E3A8A] text-white">
            <CardTitle className="text-lg">System Configuration Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {configItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">{item.setting}:</span>
                  <span className={`${
                    item.type === 'status' ? 'px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm' :
                    item.type === 'mode' ? 'px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm' :
                    'text-slate-600'
                  }`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RTGSConfig;
