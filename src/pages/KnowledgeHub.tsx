
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
      hasBenchmark: true
    },
    { 
      id: 2, 
      name: 'Instruction - Request for Overdraft from portals_062022.docx', 
      version: 'v3', 
      date: '11.06.2025 13:23',
      author: 'asmimov',
      hasBenchmark: false
    },
    { 
      id: 3, 
      name: 'Instruction - Request for Overdraft from portals_062022.docx', 
      version: 'v2', 
      date: '11.06.2025 12:10',
      author: 'asmimov',
      hasBenchmark: false
    },
    { 
      id: 4, 
      name: 'Instruction - Request for Overdraft from portals_062022.docx', 
      version: 'v1', 
      date: '11.06.2025 11:34',
      author: 'asmimov',
      hasBenchmark: false
    },
    { 
      id: 5, 
      name: 'Day1_Participants_REFRESH-V.02 1.pptx', 
      version: 'v6', 
      date: '11.06.2025 14:32',
      author: 'asmimov',
      hasBenchmark: true
    },
    { 
      id: 6, 
      name: 'Participant portal Admin Guide.docx', 
      version: 'v1', 
      date: '11.06.2025 13:23',
      author: 'asmimov',
      hasBenchmark: true
    },
    { 
      id: 7, 
      name: 'Participant portal User Guide updated_v.003.docx', 
      version: 'v1', 
      date: '11.06.2025 13:23',
      author: 'asmimov',
      hasBenchmark: true
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">Knowledge Hub</h1>
          <Button 
            className="text-white"
            style={{ backgroundColor: '#0F172A' }}
          >
            Access Knowledge Hub
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader style={{ backgroundColor: '#1E3A8A' }} className="text-white">
            <CardTitle>Document Management</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {documents.map((doc, index) => (
                <div key={doc.id} className={`flex items-center justify-between p-4 ${index !== documents.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50`}>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded font-medium">{doc.version}</span>
                      <span className="text-sm text-gray-600">{doc.date}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-gray-800">👤</span>
                        <span className="text-sm text-gray-600">{doc.author}</span>
                      </div>
                    </div>
                    <h3 className="text-sm text-gray-800">{doc.name}</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Benchmark:</span>
                      <div className={`w-4 h-4 rounded-full border-2 ${doc.hasBenchmark ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                        {doc.hasBenchmark && <span className="text-white text-xs flex items-center justify-center w-full h-full">✓</span>}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
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
