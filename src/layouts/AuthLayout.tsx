import React from 'react';
import { Outlet } from 'react-router-dom';
import { Plane } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mb-4">
            <Plane className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">DroneLogix</h1>
          <p className="text-gray-600">Advanced Drone Fleet Management</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}