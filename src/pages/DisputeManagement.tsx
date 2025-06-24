
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DisputeManagement = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Dispute Management</h1>
          <a
            href="https://nbm-ips-acc1:8918/portal/view/monitoring/disputesMonitoringList.xhtml"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button 
            className="text-white"
            style={{ backgroundColor: '#0F172A' }}
          >
            Access Dispute Portal
          </Button>
          </a>
        </div>

        {/* Top Section - Summary KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Open Disputes */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Total Open Disputes</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">126</div>
              <div className="text-sm text-stone-600">active cases</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">2.4 days</div>
              <div className="text-sm text-stone-600">average time</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white pb-3">
              <CardTitle className="text-sm font-medium">% Resolved Within SLA</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-stone-800">87%</div>
              <div className="text-sm text-green-600">within target</div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Dispute Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Disputes by Participant */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Disputes by Participant</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-lg font-medium">Bar Chart</p>
                  <p className="text-sm">Disputes filed against and by each participant</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disputes by Type */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Disputes by Type</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🥧</div>
                  <p className="text-lg font-medium">Pie Chart</p>
                  <p className="text-sm">Unauthorized, Technical, Amount Mismatch, etc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DisputeManagement;
