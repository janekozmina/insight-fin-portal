
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AnomalyDetection = () => {
  const anomalies = [
    { id: 1, type: 'Unusual Transaction Pattern', severity: 'High', time: '2024-01-15 14:23', status: 'Under Review' },
    { id: 2, type: 'Multiple Failed Logins', severity: 'Medium', time: '2024-01-15 13:45', status: 'Resolved' },
    { id: 3, type: 'Large Transaction Volume', severity: 'Low', time: '2024-01-15 12:15', status: 'Monitoring' },
    { id: 4, type: 'Off-hours Activity', severity: 'Medium', time: '2024-01-15 02:30', status: 'Investigating' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Anomaly Detection</h1>
          <Button 
            className="bg-[#B1A496] hover:bg-[#B1A496]/90 text-white"
          >
            Access Fraud Detection
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-red-600 text-white">
              <CardTitle>High Risk Alerts</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-slate-600">Active Alerts</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-yellow-600 text-white">
              <CardTitle>Medium Risk</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">7</div>
                <div className="text-slate-600">Under Review</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle>Low Risk</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">12</div>
                <div className="text-slate-600">Monitoring</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="shadow-lg h-96">
            <CardHeader className="bg-[#1E3A8A] text-white">
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
            <CardHeader className="bg-[#1E3A8A] text-white">
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

        <Card className="shadow-lg">
          <CardHeader className="bg-blue-900 text-white">
            <CardTitle>Recent Anomalies</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">{anomaly.type}</h3>
                    <p className="text-sm text-slate-600">{anomaly.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getSeverityColor(anomaly.severity)}>
                      {anomaly.severity}
                    </Badge>
                    <Badge variant="outline">
                      {anomaly.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AnomalyDetection;
