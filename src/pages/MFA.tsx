
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const MFA = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyMFA } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = verifyMFA(code);
    
    if (success) {
      toast({
        title: "MFA Verified",
        description: "Welcome to Financial Market Portal",
      });
      navigate('/');
    } else {
      toast({
        title: "Verification Failed",
        description: "Invalid MFA code. Use 123456",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">🔐</span>
          </div>
          <CardTitle className="text-2xl font-bold text-blue-900">Multi-Factor Authentication</CardTitle>
          <CardDescription className="text-slate-600">
            Enter the 6-digit verification code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium text-slate-700">
                Verification Code
              </label>
              <Input
                id="code"
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                maxLength={6}
                className="h-11 text-center text-lg tracking-wider"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-blue-900 hover:bg-blue-800 text-white font-medium"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Demo MFA code: 123456
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MFA;
