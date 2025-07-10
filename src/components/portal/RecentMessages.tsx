
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, User } from 'lucide-react';
import { format } from 'date-fns';

const RecentMessages = () => {
  const { data: messages, isLoading } = useQuery({
    queryKey: ['recent-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('messages')
        .select(`
          *,
          cases (
            title,
            case_number
          )
        `)
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
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
          <MessageSquare className="w-5 h-5 mr-2" />
          Recent Messages
        </CardTitle>
        <CardDescription>
          Latest communication from your legal team
        </CardDescription>
      </CardHeader>
      <CardContent>
        {messages?.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No messages yet</p>
            <p className="text-sm">Messages will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages?.map((message) => (
              <div
                key={message.id}
                className="border rounded-lg p-3 hover:shadow-sm transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">
                      {message.is_from_lawyer ? 'Your Attorney' : 'You'}
                    </span>
                    {!message.read_at && message.is_from_lawyer && (
                      <Badge variant="destructive" className="text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {format(new Date(message.created_at), 'MMM dd, HH:mm')}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                  {message.content}
                </p>
                
                <p className="text-xs text-gray-500">
                  Re: {message.cases?.title} (#{message.cases?.case_number})
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentMessages;
