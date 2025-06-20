
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const KnowledgeHub = () => {
  const documents = [
    { 
      id: 1, 
      name: 'Instruction - Request for Overdraft from portals_062022.docx', 
      version: 'v4', 
      date: '11.06.2025 15:15',
      author: 'asmimov',
      type: 'Instruction'
    },
    { 
      id: 2, 
      name: 'Day1_Participants_REFRESH-V.02 1.pptx', 
      version: 'v6', 
      date: '11.06.2025 14:32',
      author: 'asmimov',
      type: 'Presentation'
    },
    { 
      id: 3, 
      name: 'Participant portal Admin Guide.docx', 
      version: 'v1', 
      date: '11.06.2025 13:23',
      author: 'asmimov',
      type: 'Guide'
    },
    { 
      id: 4, 
      name: 'Participant portal User Guide updated_v.003.docx', 
      version: 'v1', 
      date: '11.06.2025 13:23',
      author: 'asmimov',
      type: 'Guide'
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Knowledge Hub</h1>
          <Button 
            className="text-white"
            style={{ backgroundColor: '#1E3A8A' }}
          >
            Access Document Management
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader style={{ backgroundColor: '#1E3A8A' }} className="text-white">
            <CardTitle>Document Management</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded">{doc.version}</span>
                      <span className="text-xs text-gray-500">{doc.date}</span>
                      <span className="text-xs text-gray-600">👤 {doc.author}</span>
                    </div>
                    <h3 className="font-medium text-slate-900">{doc.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{doc.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Benchmark: ○</span>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      ✕
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default KnowledgeHub;
