import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Shield, AlertCircle } from 'lucide-react';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import FleetMonitor from './pages/fleet/FleetMonitor';
import Navigation from './pages/navigation/Navigation';
import Orders from './pages/orders/Orders';
import MaintenancePage from './pages/maintenance/MaintenancePage';
import CompliancePage from './pages/compliance/CompliancePage';
import AnalyticsPage from './pages/analytics/AnalyticsPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/signin" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="fleet" element={<FleetMonitor />} />
            <Route path="map" element={<Navigation />} />
            <Route path="orders" element={<Orders />} />
            <Route path="maintenance" element={<MaintenancePage />} />
            <Route path="compliance" element={<CompliancePage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;