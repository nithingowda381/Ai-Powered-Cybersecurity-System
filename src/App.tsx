import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import NetworkTraffic from './components/NetworkTraffic';
import ThreatDetection from './components/ThreatDetection';
import { Shield, AlertTriangle, Activity } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [threats, setThreats] = useState([]);
  const [networkData, setNetworkData] = useState([]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setNetworkData(prevData => [...prevData, { timestamp: new Date().toISOString(), bytes: Math.floor(Math.random() * 1000) }].slice(-20));
      if (Math.random() < 0.1) {
        setThreats(prevThreats => [...prevThreats, { id: Date.now(), type: 'Suspicious Activity', severity: 'High' }]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">AI-Powered Cybersecurity System</h1>
      </nav>
      <div className="container mx-auto p-4">
        <div className="flex mb-4">
          <button
            className={`mr-2 px-4 py-2 rounded ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Shield className="inline-block mr-2" /> Dashboard
          </button>
          <button
            className={`mr-2 px-4 py-2 rounded ${activeTab === 'network' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('network')}
          >
            <Activity className="inline-block mr-2" /> Network Traffic
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'threats' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('threats')}
          >
            <AlertTriangle className="inline-block mr-2" /> Threat Detection
          </button>
        </div>
        {activeTab === 'dashboard' && <Dashboard threats={threats} networkData={networkData} />}
        {activeTab === 'network' && <NetworkTraffic data={networkData} />}
        {activeTab === 'threats' && <ThreatDetection threats={threats} />}
      </div>
    </div>
  );
}

export default App;