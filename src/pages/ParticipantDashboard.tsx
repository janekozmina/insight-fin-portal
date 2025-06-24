
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParticipantDashboard = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Participant Dashboard</h1>
        </div>

        {/* Top Section - 6 KPI Cards in 2 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Row 1 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">System Net Liquidity</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">98B</div>
              <div className="text-sm text-stone-600">AED</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Collateral Limit</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">301M</div>
              <div className="text-sm text-stone-600">AED</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Warehoused Payments Count</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">69</div>
              <div className="text-sm text-stone-600">payments</div>
            </CardContent>
          </Card>

          {/* Row 2 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Queued Value</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">8.6M</div>
              <div className="text-sm text-stone-600">AED</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Overdraft Available</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">13.8M</div>
              <div className="text-sm text-stone-600">AED</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Current Warehoused</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">25.1M</div>
              <div className="text-sm text-stone-600">AED</div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - 2 Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Intraday Balance Line */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Intraday Balance Line</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/03DZ0qm5Ojl/?standalone=1&height=100%"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Priority of Payments */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Priority of Payments</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/5dRZoVx3wJ6/?standalone=1&height=100%"
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

export default ParticipantDashboard;
