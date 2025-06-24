
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const BusinessMonitoring = () => {
  const { userRole } = useAuth();

  return (
    <Layout>
      <div className="p-6 h-screen flex flex-col">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Business Monitoring</h1>
          {userRole === 'cb' && (
            <a
              href="http://superset.k8s1.moscow.cma.ru/superset/dashboard/p/JnOlGOxZlj0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Access Reporting Configuration
              </Button>
            </a>
          )}
        </div>

        {/* Main iframe taking most of available height */}
        <div className="flex-1 mb-6">
          <Card className="shadow-lg border-0 h-full">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Warehoused Payments</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1" style={{ height: 'calc(100% - 60px)' }}>
              <iframe
                width="100%"
                height="100%"
                seamless
                frameBorder="0"
                scrolling="no"
                src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/zrDZxDBpZ95/?standalone=1&height=100%"
                className="w-full h-full rounded-b-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Money Flow Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-80">
          {/* Money Flow Avg Monthly Top 5 Banks */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Money Flow Avg Monthly Top 5 Banks</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/6jz4n5xMO9A/?standalone=1&height=100%"
                  className="w-full h-full rounded-b-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Money Flow Top 5 Banks */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Money Flow Top 5 Banks</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/ALawzoBnZnB/?standalone=1&height=100%"
                  className="w-full h-full rounded-b-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMonitoring;
