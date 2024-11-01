import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Package,
  Battery,
  MapPin,
  AlertTriangle,
  Calendar,
  Download,
  Filter,
  ChevronDown,
} from 'lucide-react';

interface AnalyticsSummary {
  deliverySuccess: number;
  avgDeliveryTime: string;
  activeFleet: number;
  totalDistance: string;
  batteryEfficiency: number;
  incidentRate: string;
}

interface PerformanceMetric {
  date: string;
  deliveries: number;
  success: number;
  avgTime: number;
  distance: number;
}

const mockSummary: AnalyticsSummary = {
  deliverySuccess: 98.5,
  avgDeliveryTime: '18.5 min',
  activeFleet: 24,
  totalDistance: '1,245 km',
  batteryEfficiency: 92,
  incidentRate: '0.02%',
};

const mockPerformanceData: PerformanceMetric[] = [
  { date: '2024-03-01', deliveries: 142, success: 140, avgTime: 17.5, distance: 180 },
  { date: '2024-03-02', deliveries: 156, success: 154, avgTime: 18.2, distance: 195 },
  { date: '2024-03-03', deliveries: 134, success: 132, avgTime: 16.8, distance: 165 },
  { date: '2024-03-04', deliveries: 168, success: 165, avgTime: 19.1, distance: 210 },
  { date: '2024-03-05', deliveries: 145, success: 143, avgTime: 17.9, distance: 175 },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Comprehensive overview of fleet performance and metrics</p>
          </div>
          <div className="flex space-x-4">
            <select
              className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last Quarter</option>
            </select>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Delivery Success Rate</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{mockSummary.deliverySuccess}%</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <span className="sr-only">Increased by</span>
                      +2.5%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Average Delivery Time</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{mockSummary.avgDeliveryTime}</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      -1.2min
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Battery className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Battery Efficiency</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{mockSummary.batteryEfficiency}%</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      +3.2%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Delivery Performance</h2>
            <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Performance chart visualization coming soon</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Fleet Utilization</h2>
            <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Utilization chart visualization coming soon</p>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Detailed Performance Metrics</h2>
            <div className="flex space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Calendar className="h-4 w-4 mr-2" />
                Select Date Range
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Deliveries
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Distance Covered
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockPerformanceData.map((data) => (
                <tr key={data.date} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.deliveries}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900">
                        {((data.success / data.deliveries) * 100).toFixed(1)}%
                      </span>
                      <span className="ml-2 text-xs text-green-600">↑</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.avgTime} min
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.distance} km
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}