import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Plane,
  LayoutDashboard,
  Map,
  Package,
  Wrench,
  Shield,
  BarChart,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Fleet Monitor', icon: Plane, href: '/fleet' },
  { name: 'Live Map', icon: Map, href: '/map' },
  { name: 'Orders', icon: Package, href: '/orders' },
  { name: 'Maintenance', icon: Wrench, href: '/maintenance' },
  { name: 'Compliance', icon: Shield, href: '/compliance' },
  { name: 'Analytics', icon: BarChart, href: '/analytics' },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut, user } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-30">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-semibold text-gray-900">DroneLogix</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="flex items-center p-4 border-t border-gray-200">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
            <button
              onClick={signOut}
              className="p-2 text-gray-400 hover:text-gray-500"
              title="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="pl-64">
        <div className="py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}