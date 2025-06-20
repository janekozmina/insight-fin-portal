
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
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Real-time operations monitoring
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Central Bank Operations Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-lg font-medium">Superset Dashboard</p>
                  <p className="text-sm">Central Bank Operations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CBOperations;
