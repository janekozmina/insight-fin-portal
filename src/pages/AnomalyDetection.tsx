
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

        {/* Bottom Section - Anomaly Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Anomalies Today */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Anomalies Today</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/onR4pVBWZVl/?standalone=1&height=100%"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Anomaly Rule Triggers Today vs. Historical Average */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Anomaly Rule Triggers Today vs. Historical Average</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/dYgZQEPLZBA/?standalone=1&height=100%"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AnomalyDetection;
