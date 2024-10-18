import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, Activity } from 'lucide-react';

interface DashboardProps {
  threats: Array<{ id: number; type: string; severity: string }>;
  networkData: Array<{ timestamp: string; bytes: number }>;
}

const Dashboard: React.FC<DashboardProps> = ({ threats, networkData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Network Traffic Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={networkData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bytes" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Threat Summary</h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <Shield className="inline-block mr-2 text-green-500" />
            <span className="font-bold">System Status:</span> Secure
          </div>
          <div>
            <AlertTriangle className="inline-block mr-2 text-yellow-500" />
            <span className="font-bold">Active Threats:</span> {threats.length}
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {threats.slice(-5).map(threat => (
            <li key={threat.id} className="py-2">
              <span className="font-medium">{threat.type}</span>
              <span className={`ml-2 px-2 py-1 rounded text-sm ${threat.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {threat.severity}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;