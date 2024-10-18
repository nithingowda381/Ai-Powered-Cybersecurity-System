import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

interface ThreatDetectionProps {
  threats: Array<{ id: number; type: string; severity: string }>;
}

const ThreatDetection: React.FC<ThreatDetectionProps> = ({ threats }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Threat Detection</h2>
      {threats.length === 0 ? (
        <div className="text-center py-8">
          <Shield className="inline-block text-green-500 w-16 h-16 mb-4" />
          <p className="text-lg font-medium">No active threats detected</p>
          <p className="text-gray-500">Your network is currently secure</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {threats.map(threat => (
            <li key={threat.id} className="py-4 flex items-center">
              <AlertTriangle className={`mr-4 ${threat.severity === 'High' ? 'text-red-500' : 'text-yellow-500'}`} />
              <div>
                <p className="font-medium">{threat.type}</p>
                <p className="text-sm text-gray-500">Severity: {threat.severity}</p>
              </div>
              <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Investigate
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThreatDetection;