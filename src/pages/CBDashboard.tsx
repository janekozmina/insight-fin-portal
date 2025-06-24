
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
              <div className="text-2xl font-bold text-stone-800">8.56s</div>
              <div className="text-sm text-stone-600">seconds</div>
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
            <CardContent className="p-6">
              <div className="h-80 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-lg font-medium">Money Flow Dashboard</p>
                  <p className="text-sm">Average Monthly Top 5 Banks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Money Flow Top 5 Banks */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Money Flow Top 5 Banks</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📈</div>
                  <p className="text-lg font-medium">Money Flow Dashboard</p>
                  <p className="text-sm">Current Top 5 Banks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CBDashboard;
