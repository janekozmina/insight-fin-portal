
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CBOperations = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Central Bank Operations</h1>
          <a
            href="https://cbortgsdev1:8885/portal/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Real-time operations monitoring
          </Button>
          </a>
        </div>

        {/* Bottom Section - Operational Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Collateral Monitoring */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Collateral Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/Rmy4NAP2OKg/?standalone=1&height=100%"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Cross-Border Flow Today */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white py-3">
              <CardTitle className="text-sm font-medium">Cross-Border Flow Today</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square">
                <iframe
                  width="100%"
                  height="100%"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/v7AZeP8lwRz/?standalone=1&height=100%"
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

export default CBOperations;
