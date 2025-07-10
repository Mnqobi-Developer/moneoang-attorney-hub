
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import PortalHeader from '@/components/portal/PortalHeader';
import PortalDashboard from '@/components/portal/PortalDashboard';

const ClientPortal = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-legal-gold"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalHeader />
      <PortalDashboard />
    </div>
  );
};

export default ClientPortal;
