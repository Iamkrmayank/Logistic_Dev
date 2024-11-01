import React from 'react';
import {
  Battery,
  Package,
  AlertTriangle,
  Plane,
  MapPin,
  BarChart3,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const stats = [
  { name: 'Active Drones', value: '24/30', icon: Plane, color: 'text-green-600' },
  { name: 'Deliveries Today', value: '142', icon: Package, color: 'text-blue-600' },
  { name: 'Average Delivery Time', value: '18.5 min', icon: Clock, color: 'text-indigo-600' },
  { name: 'Success Rate', value: '99.8%', icon: CheckCircle2, color: 'text-emerald-600' },
];

const alerts = [
  {
    id: 1,
    drone: 'DRN-2024-08',
    type: 'Low Battery',
    status: 'Warning',
    location: 'Zone B4',
    time: '2 min ago',
  },
  {
    id: 2,
    drone: 'DRN-2024-15',
    type: 'Weather Alert',
    status: 'Caution',
    location: 'Zone A1',
    time: '5 min ago',
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Fleet Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Real-time overview of your drone operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Map Preview */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Live Fleet Map</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
              {/* Map component will go here */}
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Map visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {alert.drone} - {alert.type}
                    </h3>
                    <div className="mt-1 flex items-center text-xs text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {alert.location}
                      <span className="mx-2">•</span>
                      {alert.time}
                    </div>
                  </div>
                  <button className="ml-4 text-sm text-indigo-600 hover:text-indigo-900">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}