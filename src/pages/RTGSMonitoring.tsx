
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
          <CardHeader className="bg-[#1E3A8A] text-white">
            <CardTitle className="text-lg">Queries</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4">
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
