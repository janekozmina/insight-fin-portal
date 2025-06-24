
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Home</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Iframe Placeholder 1 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Dashboard Section 1</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Iframe Placeholder 1</p>
                  <p className="text-sm">Content will be loaded here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Iframe Placeholder 2 */}
          <Card className="shadow-lg border-0">
<iframe
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://superset.k8s1.moscow.cma.ru/superset/explore/p/6o341el94KV/?standalone=1&height=400"
>
</iframe>
          </Card>

          {/* Iframe Placeholder 3 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Dashboard Section 3</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Iframe Placeholder 3</p>
                  <p className="text-sm">Content will be loaded here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Iframe Placeholder 4 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Dashboard Section 4</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Iframe Placeholder 4</p>
                  <p className="text-sm">Content will be loaded here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
