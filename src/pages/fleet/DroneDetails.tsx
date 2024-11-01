import React, { useState } from 'react';
import { ArrowLeft, Battery, Navigation, AlertTriangle, Video, Settings, MapPin, Wind, Gauge, Calendar, Wrench, CheckCircle2 } from 'lucide-react';

interface DroneDetailsProps {
  drone: {
    id: string;
    status: string;
    batteryLevel: number;
    currentLocation: string;
    destination: string;
    eta: string;
    altitude: number;
    speed: number;
    lastMaintenance: string;
    nextMaintenance: string;
  };
  onBack: () => void;
}

export default function DroneDetails({ drone, onBack }: DroneDetailsProps) {
  const [activeTab, setActiveTab] = useState('status');

  const getBatteryColor = (level: number) => {
    if (level > 60) return 'text-green-500';
    if (level > 20) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Fleet Monitor
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Drone {drone.id}</h1>
        <p className="mt-1 text-sm text-gray-500">Detailed monitoring and control panel</p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {['status', 'navigation', 'maintenance', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Status & Controls */}
        <div className="lg:col-span-2 space-y-8">
          {/* Live Map View */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Live Route Map</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Map visualization coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Camera Feed */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Live Camera Feed</h2>
                <div className="flex items-center">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="ml-2 text-sm text-gray-500">Live</span>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Camera feed coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Info */}
        <div className="space-y-8">
          {/* Status Card */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Drone Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Battery className={`h-5 w-5 mr-2 ${getBatteryColor(drone.batteryLevel)}`} />
                    <span className="text-sm text-gray-500">Battery Level</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{drone.batteryLevel}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Gauge className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">Speed</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{drone.speed} km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">Altitude</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{drone.altitude} m</span>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Info */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Maintenance</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">Last Check</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{drone.lastMaintenance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">Next Due</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{drone.nextMaintenance}</span>
                </div>
                <div className="mt-4">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <Wrench className="h-4 w-4 mr-2" />
                    Schedule Maintenance
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                  Emergency Land
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Return to Base
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Toggle Camera
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}