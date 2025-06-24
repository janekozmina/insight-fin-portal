
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  requestType: z.string().min(1, 'Please select a request type'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

const RequestsForCB = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Request submitted:', values);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const requestTypes = [
    'Reconciliation issues',
    'RTGS parameters changes',
    'Change request'
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-800">Requests for CB</h1>
          <p className="text-stone-600 mt-2">Submit requests to the Central Bank for assistance or changes</p>
        </div>

        <div className="max-w-2xl">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-[#1E3A8A] text-white">
              <CardTitle className="text-lg">Submit New Request</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {isSubmitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
                  Your request has been submitted successfully!
                </div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="requestType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Request Type</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select a request type</option>
                            {requestTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide detailed information about your request..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full text-white"
                    style={{ backgroundColor: '#1E3A8A' }}
                  >
                    Submit Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RequestsForCB;
