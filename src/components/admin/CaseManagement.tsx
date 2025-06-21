
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Briefcase, User, Calendar, FileText, Edit } from 'lucide-react';
import { format } from 'date-fns';

const CaseManagement = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState('all');

  const { data: cases, isLoading } = useQuery({
    queryKey: ['admin-cases', statusFilter],
    queryFn: async () => {
      let query = supabase
        .from('cases')
        .select(`
          *,
          profiles (
            first_name,
            last_name
          ),
          documents (
            id
          ),
          messages (
            id
          )
        `)
        .order('created_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('cases')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "Status Updated",
        description: "Case status has been updated successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ['admin-cases'] });
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: "There was an error updating the case status.",
        variant: "destructive",
      });
      console.error('Update error:', error);
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Case Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Briefcase className="w-5 h-5 mr-2" />
          Case Management
        </CardTitle>
        <CardDescription>
          View and manage all legal cases
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex justify-between items-center">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cases</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy">
            Create New Case
          </Button>
        </div>

        {cases?.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No cases found</p>
            <p className="text-sm">Legal cases will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cases?.map((case_item) => (
              <div
                key={case_item.id}
                className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{case_item.title}</h4>
                    <p className="text-sm text-gray-600">
                      Case #{case_item.case_number}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <User className="w-4 h-4 mr-1" />
                      Client: {case_item.profiles?.first_name} {case_item.profiles?.last_name}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(case_item.status)}>
                      {case_item.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                    <Select
                      value={case_item.status}
                      onValueChange={(newStatus) => 
                        updateStatusMutation.mutate({ id: case_item.id, status: newStatus })
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {case_item.description && (
                  <p className="text-gray-700 mb-3 line-clamp-2">
                    {case_item.description}
                  </p>
                )}
                
                <div className="grid grid-cols-3 gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Created: {format(new Date(case_item.created_at), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    Documents: {case_item.documents?.length || 0}
                  </div>
                  <div className="flex items-center">
                    <span className="capitalize">{case_item.case_type.replace('_', ' ')}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit Case
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    Documents
                  </Button>
                  <Button variant="outline" size="sm">
                    View Messages
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CaseManagement;
