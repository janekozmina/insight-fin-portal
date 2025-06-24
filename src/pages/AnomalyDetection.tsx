
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
          <a
            href="https://fds-test-ai1:8490/DBOWS/DBOWS?country=US&locale=en"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button 
            className="text-white"
            style={{ backgroundColor: '#0F172A' }}
          >
            Access Fraud Detection
          </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg h-96">
            <CardHeader style={{ backgroundColor: '#1E3A8A' }} className="text-white">
              <CardTitle className="text-lg">Fraud Detection Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-lg font-medium">Superset Dashboard</p>
                <p className="text-sm">Fraud Detection Dashboard</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg h-96">
            <CardHeader style={{ backgroundColor: '#1E3A8A' }} className="text-white">
              <CardTitle className="text-lg">Risk Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-lg font-medium">Superset Dashboard</p>
                <p className="text-sm">Risk Analytics Dashboard</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AnomalyDetection;
