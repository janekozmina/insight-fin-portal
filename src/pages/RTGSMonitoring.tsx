
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RTGSMonitoring = () => {
  const businessDayPhases = [
    { phase: 'Start-of-Day (SOD)', time: '06:00' },
    { phase: 'Liquidity Provision Window', time: '06:00 - 07:00' },
    { phase: 'Normal Settlement Window', time: '07:00 - 17:00' },
    { phase: 'Cut-off for Customer Payments', time: '16:30' },
    { phase: 'Cut-off for Interbank Payments', time: '17:00' },
    { phase: 'End-of-Day (EOD) Processing', time: '17:00 - 17:30' },
    { phase: 'Statements Generation', time: '17:30 - 18:00' },
    { phase: 'System Backup & Maintenance', time: '18:00 onwards' },
    { phase: 'Business Day Closure', time: '20:00' },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">RTGS Financial Monitoring</h1>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Access RTGS Operations
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-[#1E3A8A] text-white">
            <CardTitle className="text-lg">RTGS Business Day</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Phase</TableHead>
                      <TableHead>Time (Local)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {businessDayPhases.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{row.phase}</TableCell>
                        <TableCell className="font-mono text-sm">{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RTGSMonitoring;
