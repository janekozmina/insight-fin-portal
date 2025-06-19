
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RTGSMonitoring = () => {
  const queryData = [
    { id: '420...', requestDocId: '10703918', messageId: '', docId: '', refDocTrn: '', accId: '', accCode: '', docTypeId: '1857', docTypeCode: '195LFI' },
    { id: '420...', requestDocId: '10703919', messageId: '', docId: '', refDocTrn: '', accId: '', accCode: '', docTypeId: '1858', docTypeCode: '195LFIR' },
    { id: '420...', requestDocId: '10703921', messageId: '', docId: '', refDocTrn: '', accId: '', accCode: '', docTypeId: '74', docTypeCode: '999SS' },
    { id: '420...', requestDocId: '10703923', messageId: '654...', docId: 'BKAMM...', refDocTrn: '', accId: '', accCode: '', docTypeId: '26', docTypeCode: '195RTSP' },
    { id: '420...', requestDocId: '10703931', messageId: '654...', docId: 'BKAMM...', refDocTrn: '', accId: '', accCode: '', docTypeId: '86', docTypeCode: '192SB' },
    { id: '420...', requestDocId: '10703933', messageId: '654...', docId: 'BKAMM...', refDocTrn: '', accId: '', accCode: '', docTypeId: '86', docTypeCode: '192SB' },
    { id: '420...', requestDocId: '10703937', messageId: '', docId: '', refDocTrn: '', accId: '', accCode: '', docTypeId: '52', docTypeCode: '999SP' },
    { id: '420...', requestDocId: '10703938', messageId: '', docId: '', refDocTrn: '1925', accId: '0011', accCode: '', docTypeId: '50', docTypeCode: '999SL' },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800">RTGS Financial Monitoring</h1>
          <Button 
            className="bg-[#B1A496] hover:bg-[#B1A496]/90 text-white"
          >
            Access PSWA
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-[#B1A496] to-[#B1A496]/80 text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Queries</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" className="text-white hover:bg-white/10 text-sm">
                  Add new +
                </Button>
                <select className="bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white">
                  <option value="Administrator">Administrator</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="text-gray-600 hover:bg-gray-200">
                  Authorize
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:bg-gray-200">
                  Decline
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  ⤢
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  ✕
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">
                  + New widget
                </Button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Queries (217 records)</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search" 
                      className="pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    ⊞
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    ☰
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    ✕
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Id</TableHead>
                      <TableHead>Request doc id</TableHead>
                      <TableHead>Message id</TableHead>
                      <TableHead>Doc id</TableHead>
                      <TableHead>Ref doc trn</TableHead>
                      <TableHead>Acc id</TableHead>
                      <TableHead>Acc code</TableHead>
                      <TableHead>Doc type id</TableHead>
                      <TableHead>Doc type code</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {queryData.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-mono text-sm">{row.id}</TableCell>
                        <TableCell className="font-mono text-sm text-blue-600">{row.requestDocId}</TableCell>
                        <TableCell className="font-mono text-sm">{row.messageId}</TableCell>
                        <TableCell className="font-mono text-sm">{row.docId}</TableCell>
                        <TableCell className="font-mono text-sm">{row.refDocTrn}</TableCell>
                        <TableCell className="font-mono text-sm">{row.accId}</TableCell>
                        <TableCell className="font-mono text-sm">{row.accCode}</TableCell>
                        <TableCell className="font-mono text-sm">{row.docTypeId}</TableCell>
                        <TableCell className="font-mono text-sm">{row.docTypeCode}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Hignex AB 2024</div>
                <div>Période d'échange 13-01-2025 01:55</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RTGSMonitoring;
