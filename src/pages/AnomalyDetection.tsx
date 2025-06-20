
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnomalyDetection = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Anomaly Detection</h1>
          <Button 
            className="text-white"
            style={{ backgroundColor: '#1E3A8A' }}
          >
            Access Fraud Detection
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg h-96">
            <CardHeader style={{ backgroundColor: '#1E3A8A' }} className="text-white">
              <CardTitle>Fraud Detection Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📊</div>
                <p>Dashboard content will be loaded here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg h-96">
            <CardHeader style={{ backgroundColor: '#1E3A8A' }} className="text-white">
              <CardTitle>Risk Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📈</div>
                <p>Dashboard content will be loaded here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AnomalyDetection;
