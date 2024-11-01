import React, { useState } from 'react';
import { MapPin, Navigation as NavIcon, Shield, Plane, AlertTriangle, Plus, X, Save } from 'lucide-react';

interface GeofenceZone {
  id: string;
  name: string;
  type: 'restricted' | 'delivery' | 'corridor';
  status: 'active' | 'inactive';
}

interface ActiveDrone {
  id: string;
  location: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  status: 'in-flight' | 'returning' | 'landed';
  batteryLevel: number;
}

const mockGeofences: GeofenceZone[] = [
  { id: 'GF1', name: 'Downtown No-Fly Zone', type: 'restricted', status: 'active' },
  { id: 'GF2', name: 'Delivery Corridor A', type: 'corridor', status: 'active' },
  { id: 'GF3', name: 'Shopping District', type: 'delivery', status: 'active' },
];

const mockDrones: ActiveDrone[] = [
  {
    id: 'DRN-2024-08',
    location: { lat: 40.7128, lng: -74.0060 },
    destination: { lat: 40.7580, lng: -73.9855 },
    status: 'in-flight',
    batteryLevel: 85,
  },
];

export default function Navigation() {
  const [selectedZone, setSelectedZone] = useState<GeofenceZone | null>(null);
  const [isCreatingZone, setIsCreatingZone] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Navigation Control</h1>
        <p className="mt-1 text-sm text-gray-500">Manage flight paths and geofencing zones</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Controls and Lists */}
        <div className="lg:col-span-1 space-y-6">
          {/* Geofence Controls */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Geofence Zones</h2>
              <button
                onClick={() => setIsCreatingZone(true)}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Zone
              </button>
            </div>
            <div className="space-y-3">
              {mockGeofences.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedZone?.id === zone.id
                      ? 'bg-indigo-50 border-2 border-indigo-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {zone.type === 'restricted' && <Shield className="h-4 w-4 text-red-500 mr-2" />}
                      {zone.type === 'corridor' && <NavIcon className="h-4 w-4 text-blue-500 mr-2" />}
                      {zone.type === 'delivery' && <MapPin className="h-4 w-4 text-green-500 mr-2" />}
                      <span className="text-sm font-medium text-gray-900">{zone.name}</span>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        zone.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {zone.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Drones */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Active Drones</h2>
            <div className="space-y-3">
              {mockDrones.map((drone) => (
                <div key={drone.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Plane className="h-4 w-4 text-indigo-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{drone.id}</span>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        drone.status === 'in-flight'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {drone.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Battery: {drone.batteryLevel}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Live Navigation Map</h2>
                <div className="flex space-x-2">
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" />
                    Weather Alerts
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <Shield className="h-4 w-4 mr-1 text-blue-500" />
                    Restricted Zones
                  </button>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Map visualization coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Creation Modal */}
      {isCreatingZone && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Create New Geofence Zone</h3>
              <button
                onClick={() => setIsCreatingZone(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="zone-name" className="block text-sm font-medium text-gray-700">
                  Zone Name
                </label>
                <input
                  type="text"
                  id="zone-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="zone-type" className="block text-sm font-medium text-gray-700">
                  Zone Type
                </label>
                <select
                  id="zone-type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="restricted">Restricted Area</option>
                  <option value="delivery">Delivery Zone</option>
                  <option value="corridor">Flight Corridor</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsCreatingZone(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Create Zone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}