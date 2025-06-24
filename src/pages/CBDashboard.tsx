
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CBDashboard = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Central Bank Dashboard</h1>
        </div>

        {/* Top Section - Updated metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Transaction Today */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Total Transaction Today</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">109k</div>
              <div className="text-sm text-green-600">+5.2% from yesterday</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Average Processing Time</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">8.56 seconds</div>
              <div className="text-sm text-stone-600">average time</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Average Transaction Value</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">196k AED</div>
              <div className="text-sm text-stone-600">per transaction</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Processing Delay Share</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">1.1%</div>
              <div className="text-sm text-stone-600">last hour</div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Money Flow Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Money Flow Avg Monthly Top 5 Banks */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Money Flow Avg Monthly Top 5 Banks</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/6jz4n5xMO9A/?standalone=1&height=100%"
                  className="w-full h-full"
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
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/ALawzoBnZnB/?standalone=1&height=100%"
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

export default CBDashboard;
