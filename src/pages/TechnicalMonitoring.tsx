
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TechnicalMonitoring = () => {
  const services = [
    {
      name: 'Access Server',
      systems: [
        { id: 'acc1', status: 'UP', color: 'bg-green-600' },
        { id: 'acc2', status: 'UP', color: 'bg-green-600' }
      ]
    },
    {
      name: 'APIGW',
      systems: [
        { id: 'acc1', status: 'UP', color: 'bg-green-600' },
        { id: 'acc2', status: 'UP', color: 'bg-green-600' }
      ]
    },
    {
      name: 'CORE',
      systems: [
        { id: 'app1', status: 'DOWN', color: 'bg-red-600' },
        { id: 'app2', status: 'DOWN', color: 'bg-red-600' }
      ]
    },
    {
      name: 'PIE',
      systems: [
        { id: 'app1', status: 'DOWN', color: 'bg-red-600' },
        { id: 'app2', status: 'DOWN', color: 'bg-red-600' }
      ]
    },
    {
      name: 'Governor',
      systems: [
        { id: 'app1', status: 'DOWN', color: 'bg-red-600' },
        { id: 'app2', status: 'UP', color: 'bg-green-600' }
      ]
    },
    {
      name: 'CAS',
      systems: [
        { id: 'app1', status: 'DOWN', color: 'bg-red-600' },
        { id: 'app2', status: 'DOWN', color: 'bg-red-600' }
      ]
    }
  ];

  const uptimeData = [
    { service: 'AS Uptime', acc1: '1 week', acc2: '1 week' },
    { service: 'APIGW Uptime', acc1: '2 weeks', acc2: '2 weeks' },
    { service: 'CORE Uptime', acc1: '2 days', acc2: '2 days' },
    { service: 'PIE Uptime', acc1: '2 days', acc2: '2 days' },
    { service: 'GV Uptime', acc1: '1 day', acc2: '1 day' },
    { service: 'APIGW Uptime', acc1: '1 day', acc2: '1 day' }
  ];

  const wenData = [
    { service: 'WEN', acc1: '2025-06-06\n12:43:37', acc2: '2025-06-06\n12:43:23' },
    { service: 'WEN', acc1: '2025-06-05\n14:28:56', acc2: '2025-06-05\n14:42:55' },
    { service: 'WEN', acc1: '2025-06-17\n12:53:48', acc2: '2025-06-17\n12:54:05' },
    { service: 'WEN', acc1: '2025-06-17\n12:53:37', acc2: '2025-06-17\n12:53:56' },
    { service: 'WEN', acc1: '2025-06-18\n12:38:08', acc2: '2025-06-18\n12:38:28' },
    { service: 'WEN', acc1: '2025-06-17\n17:39:35', acc2: '2025-06-17 17:39:31' }
  ];

  return (
    <Layout>
      <div className="p-6 bg-white min-h-full">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-stone-800">Technical Monitoring</h1>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Access Technical Monitoring
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Service Status Column */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded border border-gray-700">
                <div className="bg-gray-700 px-4 py-2 text-white text-sm font-medium border-b border-gray-600">
                  {service.name}
                </div>
                <div className="p-3 grid grid-cols-2 gap-2">
                  {service.systems.map((system, sysIndex) => (
                    <div key={sysIndex} className={`${system.color} rounded p-3 text-center`}>
                      <div className="text-white font-bold text-sm">{system.id} {system.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Uptime Column */}
          <div className="space-y-4">
            {uptimeData.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded border border-gray-700">
                <div className="bg-gray-700 px-4 py-2 text-white text-sm font-medium border-b border-gray-600">
                  {item.service}
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">acc1</div>
                      <div className="text-green-400 font-bold text-lg">{item.acc1}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">acc2</div>
                      <div className="text-green-400 font-bold text-lg">{item.acc2}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WEN Column */}
          <div className="space-y-4">
            {wenData.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded border border-gray-700">
                <div className="bg-gray-700 px-4 py-2 text-white text-sm font-medium border-b border-gray-600">
                  {item.service}
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">acc1</div>
                      <div className="text-green-400 font-mono text-xs whitespace-pre-line">{item.acc1}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">acc2</div>
                      <div className="text-green-400 font-mono text-xs whitespace-pre-line">{item.acc2}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalMonitoring;
