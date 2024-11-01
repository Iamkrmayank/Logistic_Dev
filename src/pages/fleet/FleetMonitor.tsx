import React, { useState } from 'react';
import { Battery, Navigation, AlertTriangle, Video, Settings, MapPin, Wind, Gauge } from 'lucide-react';
import DroneDetails from './DroneDetails';

interface Drone {
  id: string;
  status: 'Active' | 'Maintenance' | 'Charging' | 'Grounded';
  batteryLevel: number;
  currentLocation: string;
  destination: string;
  eta: string;
  altitude: number;
  speed: number;
  lastMaintenance: string;
  nextMaintenance: string;
}

const drones: Drone[] = [
  {
    id: 'DRN-2024-08',
    status: 'Active',
    batteryLevel: 85,
    currentLocation: 'Zone B4',
    destination: 'Zone C2',
    eta: '12 min',
    altitude: 120,
    speed: 45,
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-03-15'
  },
  {
    id: 'DRN-2024-15',
    status: 'Maintenance',
    batteryLevel: 30,
    currentLocation: 'Hub A',
    destination: '-',
    eta: '-',
    altitude: 0,
    speed: 0,
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-02-20'
  },
  // Add more drone data as needed
];

const getBatteryColor = (level: number) => {
  if (level > 60) return 'text-green-500';
  if (level > 20) return 'text-yellow-500';
  return 'text-red-500';
};

const getStatusColor = (status: string) => {
  const colors = {
    Active: 'bg-green-100 text-green-800',
    Maintenance: 'bg-yellow-100 text-yellow-800',
    Charging: 'bg-blue-100 text-blue-800',
    Grounded: 'bg-red-100 text-red-800'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export default function FleetMonitor() {
  const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);
  const [view, setView] = useState<'list' | 'detail'>('list');

  const handleDroneClick = (drone: Drone) => {
    setSelectedDrone(drone);
    setView('detail');
  };

  const handleBack = () => {
    setView('list');
    setSelectedDrone(null);
  };

  if (view === 'detail' && selectedDrone) {
    return <DroneDetails drone={selectedDrone} onBack={handleBack} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Fleet Monitor</h1>
        <p className="mt-1 text-sm text-gray-500">Real-time monitoring and management of your drone fleet</p>
      </div>

      {/* Fleet Status Overview */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Fleet Status</h2>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <Settings className="h-4 w-4 mr-2" />
              Fleet Settings
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Drone ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Battery
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ETA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {drones.map((drone) => (
                  <tr
                    key={drone.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleDroneClick(drone)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{drone.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(drone.status)}`}>
                        {drone.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Battery className={`h-4 w-4 mr-2 ${getBatteryColor(drone.batteryLevel)}`} />
                        <span className="text-sm text-gray-900">{drone.batteryLevel}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        {drone.currentLocation}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {drone.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {drone.eta}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}