
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "./pages/Login";
import MFA from "./pages/MFA";
import Dashboard from "./pages/Dashboard";
import RTGSConfig from "./pages/RTGSConfig";
import RTGSMonitoring from "./pages/RTGSMonitoring";
import CBOperations from "./pages/CBOperations";
import ParticipantOperations from "./pages/ParticipantOperations";
import BusinessMonitoring from "./pages/BusinessMonitoring";
import TechnicalMonitoring from "./pages/TechnicalMonitoring";
import AnomalyDetection from "./pages/AnomalyDetection";
import DisputeManagement from "./pages/DisputeManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/mfa" element={<MFA />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/rtgs-config" element={
                <ProtectedRoute>
                  <RTGSConfig />
                </ProtectedRoute>
              } />
              <Route path="/rtgs-monitoring" element={
                <ProtectedRoute>
                  <RTGSMonitoring />
                </ProtectedRoute>
              } />
              <Route path="/cb-operations" element={
                <ProtectedRoute>
                  <CBOperations />
                </ProtectedRoute>
              } />
              <Route path="/participant-operations" element={
                <ProtectedRoute>
                  <ParticipantOperations />
                </ProtectedRoute>
              } />
              <Route path="/business-monitoring" element={
                <ProtectedRoute>
                  <BusinessMonitoring />
                </ProtectedRoute>
              } />
              <Route path="/technical-monitoring" element={
                <ProtectedRoute>
                  <TechnicalMonitoring />
                </ProtectedRoute>
              } />
              <Route path="/anomaly-detection" element={
                <ProtectedRoute>
                  <AnomalyDetection />
                </ProtectedRoute>
              } />
              <Route path="/dispute-management" element={
                <ProtectedRoute>
                  <DisputeManagement />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
