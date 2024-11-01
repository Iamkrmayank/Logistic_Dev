import React from 'react';
import { ArrowLeft, Package, MapPin, Clock, Plane, User, Calendar } from 'lucide-react';

interface OrderDetailsProps {
  order: {
    id: string;
    status: string;
    customer: string;
    destination: string;
    droneId: string;
    timestamp: string;
    priority: string;
    eta?: string;
  };
  onBack: () => void;
}

export default function OrderDetails({ order, onBack }: OrderDetailsProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-4 text-gray-400 hover:text-gray-500"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-medium text-gray-900">Order Details</h2>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Update Status
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Cancel Order
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Information</h3>
            <dl className="space-y-4">
              <div>
                <dt className="flex items-center text-sm font-medium text-gray-500">
                  <Package className="h-4 w-4 mr-2" />
                  Order ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{order.id}</dd>
              </div>
              <div>
                <dt className="flex items-center text-sm font-medium text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  Order Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{order.timestamp}</dd>
              </div>
              <div>
                <dt className="flex items-center text-sm font-medium text-gray-500">
                  <User className="h-4 w-4 mr-2" />
                  Customer
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{order.customer}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Information</h3>
            <dl className="space-y-4">
              <div>
                <dt className="flex items-center text-sm font-medium text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  Delivery Location
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{order.destination}</dd>
              </div>
              <div>
                <dt className="flex items-center text-sm font-medium text-gray-500">
                  <Plane className="h-4 w-4 mr-2" />
                  Assigned Drone
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{order.droneId}</dd>
              </div>
              <div>
                <dt className="flex items-center text-sm font-medium text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  Estimated Delivery Time
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{order.eta || 'Not available'}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Progress</h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-between">
              <div>
                <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </span>
                <span className="mt-2 block text-sm font-medium text-gray-900">Order Placed</span>
              </div>
              <div>
                <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </span>
                <span className="mt-2 block text-sm font-medium text-gray-900">Processing</span>
              </div>
              <div>
                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                  <Plane className="h-5 w-5 text-white" />
                </span>
                <span className="mt-2 block text-sm font-medium text-gray-900">In Transit</span>
              </div>
              <div>
                <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center ring-8 ring-white">
                  <Package className="h-5 w-5 text-gray-600" />
                </span>
                <span className="mt-2 block text-sm font-medium text-gray-900">Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}