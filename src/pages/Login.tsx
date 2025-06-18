
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = login(email, password);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Redirecting to MFA verification...",
      });
      navigate('/mfa');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Use test@test.com",
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
            <span className="text-white font-bold text-xl">FM</span>
          </div>
          <CardTitle className="text-2xl font-bold text-blue-900">Financial Market Portal</CardTitle>
          <CardDescription className="text-slate-600">
            Secure access to your financial dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-blue-900 hover:bg-blue-800 text-white font-medium"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Demo credentials: test@test.com / password
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
