import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import OrderList from './OrderList';
import OrderFilters from './OrderFilters';
import OrderDetails from './OrderDetails';

// Mock data
const mockOrders = [
  {
    id: 'ORD-2024-001',
    status: 'in-transit',
    customer: 'John Doe',
    destination: '123 Main St, City',
    droneId: 'DRN-2024-08',
    timestamp: '2024-02-20 09:30 AM',
    priority: 'express',
    eta: '15 min',
  },
  {
    id: 'ORD-2024-002',
    status: 'pending',
    customer: 'Jane Smith',
    destination: '456 Oak Ave, Town',
    droneId: 'DRN-2024-15',
    timestamp: '2024-02-20 10:15 AM',
    priority: 'normal',
    eta: '30 min',
  },
  {
    id: 'ORD-2024-003',
    status: 'delivered',
    customer: 'Robert Johnson',
    destination: '789 Pine Rd, Village',
    droneId: 'DRN-2024-22',
    timestamp: '2024-02-20 08:45 AM',
    priority: 'priority',
    eta: null,
  },
] as const;

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
            <p className="mt-1 text-sm text-gray-500">Manage and track delivery orders</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            New Order
          </button>
        </div>
      </div>

      {selectedOrder ? (
        <OrderDetails order={selectedOrder} onBack={() => setSelectedOrder(null)} />
      ) : (
        <>
          <OrderFilters onFilterChange={handleFilterChange} />
          <div className="bg-white shadow rounded-lg">
            <OrderList orders={mockOrders} onOrderSelect={setSelectedOrder} />
          </div>
        </>
      )}
    </div>
  );
}